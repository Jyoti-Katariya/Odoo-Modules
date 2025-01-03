/** @odoo-module **/
import { FormCompiler } from "@web/views/form/form_compiler";
import { patch } from "@web/core/utils/patch"; 

patch(FormCompiler.prototype, {
    
    compileForm(el, params) {

        const res = super.compileForm(el, params);

            const classes = res.getAttribute("t-attf-class")
            const formView = res.getElementsByClassName('o_form_sheet_bg')[0]
            $(formView).addClass('customBottom')
            $($(formView).parent()).find('.o-mail-Form-chatter').addClass('customBottom')
            const newClasses = classes.replace('{{ __comp__.uiService.size < 6 ? "flex-column" : "flex-nowrap h-100" }}', 'flex-column')
            res.setAttribute("t-attf-class", `${newClasses}`);
            return res
    },

    compile(node, params) {
        
        const res = super.compile(node, params);

        const chatterContainerHookXml = res.querySelector(".o-mail-Form-chatter");
        if (!chatterContainerHookXml) {
            return res; // no chatter, keep the result as it is
        }


            const classes = chatterContainerHookXml.getAttribute("t-attf-class")
            if(classes){
                const newClasses = classes.replace('{{ __comp__.uiService.size >= 6 ? "o-aside" : "mt-4 mt-md-0" }}', 'mt-4 mt-md-0')
                res.setAttribute("t-attf-class", `${newClasses}`);
            }
            return res

    },
});

