/**
 * Mainnet Cash
 * A developer friendly bitcoin cash wallet api  This API is currently in active development, breaking changes may be made prior to official release of version 1.  **Important:** modifying this library to prematurely operate on mainnet may result in loss of funds 
 *
 * The version of the OpenAPI document: 0.0.4
 * Contact: hello@mainnet.cash
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class PortableNetworkGraphic {
    /**
    * A Qr code image data in png format as base64 encoded string. Suitable for inclusion in html using:     - \\<img src\\=\\\"data:image/png;base64,**iVBORw0KGgoAAAANSUhEUg...   ...Jggg==**\"\\>  
    */
    'src'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "src",
            "baseName": "src",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PortableNetworkGraphic.attributeTypeMap;
    }
}
