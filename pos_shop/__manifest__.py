# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name' : 'Pos_shop',
    'version' : '1.2',
    'summary': 'POS modification',
    'sequence': 10,
    'description': """
    This module allows bill creation without payment in POS Shop mode
    """,
    'category': 'Sales/Point of Sale',
    'website': '',
    'depends': ['point_of_sale'],
    'data': [],
    'demo': [],
    'installable': True,
    'application': True,

    'assets': {
        'point_of_sale._assets_pos': [
            'pos_shop/static/src/**/*',
            # 'pos_shop/static/src/css/pos_shop.css',

            # 'pos_shop/static/src/js/pos_shop.js',
            # 'pos_shop/static/src/xml/payment_screen.xml',
        ],
        'web._assets_primary_variables': [
        ],
        'web.assets_backend': [
            'pos_shop/static/src/css/chatter_custom.scss',
            'pos_shop/static/src/js/chatter_position.js',
         ],
       
    },
}
