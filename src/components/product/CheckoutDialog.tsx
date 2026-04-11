"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShippingDetails, checkoutWhatsApp } from "@/lib/cart";

interface CheckoutDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CheckoutDialog({ open, onOpenChange }: CheckoutDialogProps) {
    const [details, setDetails] = useState<ShippingDetails>({
        name: "",
        phone: "",
        address: "",
        city: "",
        pinCode: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        checkoutWhatsApp(details);
        onOpenChange(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDetails((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-display uppercase tracking-widest text-xl">Shipping Details</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" required value={details.name} onChange={handleChange} className="bg-transparent border-foreground/20 focus:border-foreground" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" required value={details.phone} onChange={handleChange} className="bg-transparent border-foreground/20 focus:border-foreground" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">Full Address</Label>
                        <Textarea id="address" name="address" required value={details.address} onChange={handleChange} className="bg-transparent border-foreground/20 focus:border-foreground min-h-[80px]" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" name="city" required value={details.city} onChange={handleChange} className="bg-transparent border-foreground/20 focus:border-foreground" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="pinCode">Pin Code</Label>
                            <Input id="pinCode" name="pinCode" required value={details.pinCode} onChange={handleChange} className="bg-transparent border-foreground/20 focus:border-foreground" />
                        </div>
                    </div>
                    <DialogFooter className="pt-4">
                        <button type="submit" className="w-full bg-foreground text-background py-4 uppercase text-sm tracking-widest font-medium hover:bg-foreground/90 transition-colors">
                            Continue to WhatsApp
                        </button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
