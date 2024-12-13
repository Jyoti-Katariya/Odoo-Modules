 /** @odoo-module */ 

import { _t } from "@web/core/l10n/translation";

import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen"; 


 ProductScreen.prototype.getNumpadButtons =  function(){
     const buttonClasses = { "quantity": "pos_qty_btn",
         "discount": "pos_disc_btn",
          "price": "pos_price_btn",
           "Backspace": "pos_backspace_btn",
           "-" : "pos_symbol_btn"
        }
   
        return [
            { value: "1" },
            { value: "2" },
            { value: "3" },
            { value: "quantity", text: _t("Qty"),  },
            { value: "4" },
            { value: "5" },
            { value: "6" },
            { value: "discount", text: _t("% Disc"), disabled: !this.pos.config.manual_discount },
            { value: "7" },
            { value: "8" },
            { value: "9" },
            {
                value: "price",
                text: _t("Price"),
                disabled: !this.pos.cashierHasPriceControlRights(),
            },
            { value: "-", text: "+/-" },
            { value: "0" },
            { value: this.env.services.localization.decimalPoint },
            // Unicode: https://www.compart.com/en/unicode/U+232B
            { value: "Backspace", text: "⌫" },
        ].map((button) => ({
            ...button,
            class: `${this.pos.numpadMode === button.value ? "active border-primary" : ""} ${buttonClasses[button.value] || ""}`,
         }));
    
 }
 