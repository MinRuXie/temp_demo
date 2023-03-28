$(function(){
    // supplier
    let $supplier_form = $('#supplier-form');
    let $input_supplier_fname = $('#supplier-fname');
    let $input_supplier_lname = $('#supplier-lname');
    let $input_supplier_email = $('#supplier-email');
    let $input_supplier_company = $('#supplier-company');
    let $input_supplier_business = $('#supplier-business');
    let $checkbox_supplier_agree = document.getElementById('supplier-agree');

    let $supplier_submit_btn = $('#js-supplier-submit-btn');

    // retailer
    let $retailer_form = $('#retailer-form');
    let $input_retailer_fname = $('#retailer-fname');
    let $input_retailer_lname = $('#retailer-lname');
    let $input_retailer_email = $('#retailer-email');
    let $input_retailer_company = $('#retailer-company');
    let $input_retailer_website = $('#retailer-website');
    let $input_retailer_revenue = $('#retailer-revenue');
    let $input_retailer_business = $('#retailer-business');
    let $checkbox_retailer_agree = document.getElementById('retailer-agree');

    let $retailer_submit_btn = $('#js-retailer-submit-btn');

    // common
    let $success_modal = $('#successModal');
    let email_rule = /^(\w|\.|\-)+@(\w|\.|\-)+\.(\w|\.|\-)+$/;


    /* data verification */
    function verifyData($target, rule) {
        let flag = rule.test($target.val());
        let $target_wrap = $target.parents('.layout-item');
        let $target_error_wrap = $target.siblings('.form-error-wrap');

        if ( flag ) {
            $target_error_wrap.find('.error-invalid').removeClass('show');
        } else {
            
            $target_error_wrap.find('.error-invalid').addClass('show');
        }

        if ( $target_error_wrap.find('.show').length != 0 ) {
            $target_wrap.addClass('error-style');
        } else {
            $target_wrap.removeClass('error-style');
        }

        return flag;
    }

    /* empty verification */
    function verifyEmpty($target) {
        let flag = $target.val().length == 0 ? false : true;
        let $target_wrap = $target.parents('.layout-item');
        let $target_error_wrap = $target.siblings('.form-error-wrap');

        if ( flag ) {
            $target_error_wrap.find('.error-required').removeClass('show');
        } else {
            $target_error_wrap.find('.error-required').addClass('show');
        }

        if ( $target_error_wrap.find('.show').length != 0 ) {
            $target_wrap.addClass('error-style');
        } else {
            $target_wrap.removeClass('error-style');
        }

        return flag;
    }

    /* checkbox verification */
    function verifyChecked(js_target) {
        let flag = js_target.checked;
        let $target = $(js_target);
        let $target_wrap = $target.parents('.layout-item');

        if ( flag ) {
            $target_wrap.removeClass('error-style');
        } else {
            $target_wrap.addClass('error-style');
        }

        return flag;
    }


    /* supplier form - submit button */
    $supplier_submit_btn.click(function() {
        let email_data_flag = verifyData($input_supplier_email, email_rule);
        let fname_empty_flag = verifyEmpty($input_supplier_fname);
        let lname_empty_flag = verifyEmpty($input_supplier_lname);
        let email_empty_flag = verifyEmpty($input_supplier_email);
        let company_empty_flag = verifyEmpty($input_supplier_company);
        let business_empty_flag = verifyEmpty($input_supplier_business);
        let agree_flag = verifyChecked($checkbox_supplier_agree);

        if ( email_data_flag && fname_empty_flag && lname_empty_flag &&
             email_empty_flag && company_empty_flag && business_empty_flag && agree_flag ) {
            $success_modal.modal('show');
        } else {
            $supplier_form.find('.error-style').find('[required]').eq(0).focus();
        }
    });

    /* retailer form - submit button */
    $retailer_submit_btn.click(function() {
        let email_data_flag = verifyData($input_retailer_email, email_rule);
        let fname_empty_flag = verifyEmpty($input_retailer_fname);
        let lname_empty_flag = verifyEmpty($input_retailer_lname);
        let email_empty_flag = verifyEmpty($input_retailer_email);
        let company_empty_flag = verifyEmpty($input_retailer_company);
        let website_empty_flag = verifyEmpty($input_retailer_website);
        let revenue_empty_flag = verifyEmpty($input_retailer_revenue);
        let business_empty_flag = verifyEmpty($input_retailer_business);
        let agree_flag = verifyChecked($checkbox_retailer_agree);

        if ( email_data_flag && fname_empty_flag && lname_empty_flag &&
             email_empty_flag && company_empty_flag && website_empty_flag && 
             revenue_empty_flag && business_empty_flag && agree_flag ) {
            $success_modal.modal('show');
        } else {
            $retailer_form.find('.error-style').find('[required]').eq(0).focus();
        }
    });

});