import { Injectable } from '@nestjs/common';

import * as nodemailer from 'nodemailer';
import { emailApp, passwordApp } from './auxData';

@Injectable()
export class MailerService {
   async sendmail(message : string, email : string){
    
    try {
      let transporter = nodemailer.createTransport(`smtps://`+emailApp+`%40gmail.com:`+passwordApp+`@smtp.gmail.com` );
      let mailOptions = { 
        from : 'Tariy app.tariy@gmail.com', 
        to : email, 
        subject : 'Bienvenido a la familia tariy', 
        text: "" ,
        html : message
      }; 

      transporter.sendMail(mailOptions, (err , info)=>{
          if(err){
            console.log("error en envio de mail ", err)
          }
          
      })

     }catch (error) {
           console.log("error al enviar el correo  ", error); 
        }
    }

    sendmailCustomer(email : string){
        let message = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
            <meta charset="UTF-8">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta content="telephone=no" name="format-detection">
            <title>¡Bienvenido a Tariy!</title>
            <!--[if (mso 16)]>    <style type="text/css">    a {text-decoration: none;}    </style>    <![endif]-->
            <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
            <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
            <!--[if !mso]><!-- -->
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
            <!--<![endif]-->
        </head>
        
        <body>
            <div class="es-wrapper-color">
                <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#f6f6f6"></v:fill>
              </v:background>
            <![endif]-->
                <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <td class="esd-email-paddings st-br" valign="top">
                                <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe esd-checked" align="center" style="background-image:url(https://ipgdlh.stripocdn.email/content/guids/CABINET_0185ec3caf0610f4b9817aa1405149a0/images/20841560930387653.jpg);background-color: transparent; background-position: center bottom; background-repeat: no-repeat;" bgcolor="transparent" background="https://ipgdlh.stripocdn.email/content/guids/CABINET_0185ec3caf0610f4b9817aa1405149a0/images/20841560930387653.jpg">
                                                <!--[if gte mso 9]> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;height:204px;"> <v:fill type="tile" src="https://pics.esputnik.com/repository/home/17278/common/images/1546958148946.jpg" color="#343434" origin="0.5, 0" position="0.5,0" ></v:fill> <v:textbox inset="0,0,0,0"> <![endif]-->
                                                <div>
                                                    <table bgcolor="transparent" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.ahren.tariy"><img src="https://ipgdlh.stripocdn.email/content/guids/d55de36d-4c90-4305-b586-ec16185f2214/images/9161594382541923.png" alt style="display: block; width: 141px; height: 141px;" height="141"></a></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-spacer" height="65"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center" bgcolor="transparent" style="background-color: transparent;">
                                                <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p30t es-p15b es-p30r es-p30l" align="left" style="border-radius: 10px 10px 0px 0px; background-color: #ffffff; background-position: left bottom;" bgcolor="#ffffff">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="540" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%" style="background-position: left bottom;">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-text">
                                                                                                <h1>¡Bienvenido a&nbsp; la familia Tariy!</h1>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-text es-p20t">
                                                                                                <p>Desde ahora usted podra realizar sus compras de manera rapida y segura.</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure es-p5t es-p5b es-p30r es-p30l" align="left" style="border-radius: 0px 0px 10px 10px; background-position: left top; background-color: #ffffff;">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="540" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text">
                                                                                                <h2>Busque y encuentre diversa variedad de productos</h2>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p20r es-p20l" align="left" style="background-position: left bottom;">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer" height="40"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="border-radius: 0px 0px 6px 6px; background-position: left bottom; background-color: #fafafa;" class="esd-structure es-p5t" align="left" bgcolor="#fafafa">
                                                                <!--[if mso]><table width="600" cellpadding="0" cellspacing="0"><tr><td width="344" valign="top"><![endif]-->
                                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="344" class="es-m-p20b esd-container-frame" align="left">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-image" style="font-size:0"><a target="_blank"><img class="adapt-img" src="https://ipgdlh.stripocdn.email/content/guids/CABINET_ab7a5cf633955872c878a638bb1ba596/images/96071556175528209.jpg" alt style="display: block;" width="344"></a></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]></td><td width="10"></td><td width="246" valign="top"><![endif]-->
                                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="246" align="left" class="esd-container-frame">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-m-txt-c es-p30r es-p10l">
                                                                                                <h3 style="color: #909090; font-size: 24px;">hombre</h3>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-m-txt-c es-p15t es-p10r es-p10l">
                                                                                                <p style="color: #b5b5b5;">conjunto varon</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-p15t es-p20b es-p15r es-p10l es-m-txt-c">
                                                                                                <p style="color: #909090; font-size: 12px;"><b>S/. 350.00</b><br></p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-button es-p10"><span class="es-button-border es-button-border-1594383688278" style="background: #f05c2b;"><a href class="es-button es-button-1594383688263" target="_blank" style="background: #f05c2b; border-color: #f05c2b;">Agregar al carrito</a></span></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]></td></tr></table><![endif]-->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure" align="left">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer" height="20" bgcolor="#fafafa"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="border-radius: 6px; background-position: left bottom;" class="esd-structure" align="left" bgcolor="#fafafa">
                                                                <!--[if mso]><table dir="rtl" width="600" cellpadding="0" cellspacing="0"><tr><td dir="ltr" width="340" valign="top"><![endif]-->
                                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="340" align="left" class="esd-container-frame es-m-p20b">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-image" style="font-size:0"><a target="_blank"><img class="adapt-img" src="https://ipgdlh.stripocdn.email/content/guids/CABINET_ab7a5cf633955872c878a638bb1ba596/images/9831556175812408.jpg" alt style="display: block;" height="240"></a></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]></td><td dir="ltr" width="20"></td><td dir="ltr" width="240" valign="top"><![endif]-->
                                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="240" class="esd-container-frame" align="left">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-m-txt-c es-p10r es-p30l">
                                                                                                <h3 style="color: #909090; font-size: 24px;">mujer</h3>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-m-txt-c es-p15t es-p10r es-p30l">
                                                                                                <p style="color: #b5b5b5;">conjunto mujer</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-m-txt-c es-p15t es-p20b es-p10r es-p30l">
                                                                                                <h3 style="color: #909090; font-size: 12px;"><b>S/. 250</b><br></h3>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-button es-p10t es-p10b es-p10r es-p30l"><span class="es-button-border es-button-border-1594383695918" style="background: #f05c2b;"><a href class="es-button es-button-1594383695903" target="_blank" style="border-width: 10px 20px; background: #f05c2b; border-color: #f05c2b;">agrega al carrito</a></span></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]></td></tr></table><![endif]-->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure es-p20r es-p20l" align="left" style="background-color: #fafafa;" bgcolor="#fafafa">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-button es-p10"><span class="es-button-border es-button-border-1594383701541" style="background: #f05c2b;"><a href="https://play.google.com/store/apps/details?id=com.ahren.tariy" class="es-button es-button-1594383701523" target="_blank" style="background: #f05c2b; border-color: #f05c2b;">Prueba Tariy</a></span></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure es-p20r es-p20l" align="left" style="background-position: left bottom;">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%" style="background-position: left bottom;">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer" height="40"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" esd-custom-block-id="27516" style="background-color: transparent;" bgcolor="transparent" align="center">
                                                <table class="es-content-body" style="background-color: #f7f7f7;" width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure" align="left" style="border-radius: 0px 0px 10px 10px; background-position: center bottom; background-color: #ffffff;">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer" height="15"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure" align="left" style="background-position: left top;">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer" height="40"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
        
        </html>`;
                 return this.sendmail(message, email)
    }
          
    sendmailSupplier(email : string){
        let message = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
            <meta charset="UTF-8">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta content="telephone=no" name="format-detection">
            <title>¡Bienvenido a Tariy!</title>
            <!--[if (mso 16)]>    <style type="text/css">    a {text-decoration: none;}    </style>    <![endif]-->
            <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
            <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
            <!--[if !mso]><!-- -->
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
            <!--<![endif]-->
        </head>
        
        <body>
            <div class="es-wrapper-color">
                <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#f6f6f6"></v:fill>
              </v:background>
            <![endif]-->
                <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <td class="esd-email-paddings st-br" valign="top">
                                <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe esd-checked" align="center" style="background-image:url(https://ipgdlh.stripocdn.email/content/guids/CABINET_0185ec3caf0610f4b9817aa1405149a0/images/20841560930387653.jpg);background-color: transparent; background-position: center bottom; background-repeat: no-repeat;" bgcolor="transparent" background="https://ipgdlh.stripocdn.email/content/guids/CABINET_0185ec3caf0610f4b9817aa1405149a0/images/20841560930387653.jpg">
                                                <!--[if gte mso 9]> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;height:204px;"> <v:fill type="tile" src="https://pics.esputnik.com/repository/home/17278/common/images/1546958148946.jpg" color="#343434" origin="0.5, 0" position="0.5,0" ></v:fill> <v:textbox inset="0,0,0,0"> <![endif]-->
                                                <div>
                                                    <table bgcolor="transparent" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.ahren.tariy"><img src="https://ipgdlh.stripocdn.email/content/guids/d55de36d-4c90-4305-b586-ec16185f2214/images/9161594382541923.png" alt style="display: block; width: 141px; height: 141px;" height="141"></a></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-spacer" height="65"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center" bgcolor="transparent" style="background-color: transparent;">
                                                <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p30t es-p15b es-p30r es-p30l" align="left" style="border-radius: 10px 10px 0px 0px; background-color: #ffffff; background-position: left bottom;" bgcolor="#ffffff">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="540" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%" style="background-position: left bottom;">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-text">
                                                                                                <h1>¡Bienvenido a&nbsp; la familia Tariy!</h1>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-text es-p20t">
                                                                                                <p>Desde ahora usted podra realizar sus compras de manera rapida y segura.</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure es-p5t es-p5b es-p30r es-p30l" align="left" style="border-radius: 0px 0px 10px 10px; background-position: left top; background-color: #ffffff;">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="540" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text">
                                                                                                <h2>Busque y encuentre diversa variedad de productos</h2>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p20r es-p20l" align="left" style="background-position: left bottom;">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer" height="40"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="border-radius: 0px 0px 6px 6px; background-position: left bottom; background-color: #fafafa;" class="esd-structure es-p5t" align="left" bgcolor="#fafafa">
                                                                <!--[if mso]><table width="600" cellpadding="0" cellspacing="0"><tr><td width="344" valign="top"><![endif]-->
                                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="344" class="es-m-p20b esd-container-frame" align="left">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-image" style="font-size:0"><a target="_blank"><img class="adapt-img" src="https://ipgdlh.stripocdn.email/content/guids/CABINET_ab7a5cf633955872c878a638bb1ba596/images/96071556175528209.jpg" alt style="display: block;" width="344"></a></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]></td><td width="10"></td><td width="246" valign="top"><![endif]-->
                                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="246" align="left" class="esd-container-frame">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-m-txt-c es-p30r es-p10l">
                                                                                                <h3 style="color: #909090; font-size: 24px;">hombre</h3>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-m-txt-c es-p15t es-p10r es-p10l">
                                                                                                <p style="color: #b5b5b5;">conjunto varon</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-p15t es-p20b es-p15r es-p10l es-m-txt-c">
                                                                                                <p style="color: #909090; font-size: 12px;"><b>S/. 350.00</b><br></p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-button es-p10"><span class="es-button-border es-button-border-1594383688278" style="background: #f05c2b;"><a href class="es-button es-button-1594383688263" target="_blank" style="background: #f05c2b; border-color: #f05c2b;">Agregar al carrito</a></span></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]></td></tr></table><![endif]-->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure" align="left">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer" height="20" bgcolor="#fafafa"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="border-radius: 6px; background-position: left bottom;" class="esd-structure" align="left" bgcolor="#fafafa">
                                                                <!--[if mso]><table dir="rtl" width="600" cellpadding="0" cellspacing="0"><tr><td dir="ltr" width="340" valign="top"><![endif]-->
                                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="340" align="left" class="esd-container-frame es-m-p20b">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-image" style="font-size:0"><a target="_blank"><img class="adapt-img" src="https://ipgdlh.stripocdn.email/content/guids/CABINET_ab7a5cf633955872c878a638bb1ba596/images/9831556175812408.jpg" alt style="display: block;" height="240"></a></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]></td><td dir="ltr" width="20"></td><td dir="ltr" width="240" valign="top"><![endif]-->
                                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="240" class="esd-container-frame" align="left">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-m-txt-c es-p10r es-p30l">
                                                                                                <h3 style="color: #909090; font-size: 24px;">mujer</h3>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-m-txt-c es-p15t es-p10r es-p30l">
                                                                                                <p style="color: #b5b5b5;">conjunto mujer</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text es-m-txt-c es-p15t es-p20b es-p10r es-p30l">
                                                                                                <h3 style="color: #909090; font-size: 12px;"><b>S/. 250</b><br></h3>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-button es-p10t es-p10b es-p10r es-p30l"><span class="es-button-border es-button-border-1594383695918" style="background: #f05c2b;"><a href class="es-button es-button-1594383695903" target="_blank" style="border-width: 10px 20px; background: #f05c2b; border-color: #f05c2b;">agrega al carrito</a></span></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]></td></tr></table><![endif]-->
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure es-p20r es-p20l" align="left" style="background-color: #fafafa;" bgcolor="#fafafa">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-button es-p10"><span class="es-button-border es-button-border-1594383701541" style="background: #f05c2b;"><a href="https://play.google.com/store/apps/details?id=com.ahren.tariy" class="es-button es-button-1594383701523" target="_blank" style="background: #f05c2b; border-color: #f05c2b;">Prueba Tariy</a></span></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure es-p20r es-p20l" align="left" style="background-position: left bottom;">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%" style="background-position: left bottom;">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer" height="40"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" esd-custom-block-id="27516" style="background-color: transparent;" bgcolor="transparent" align="center">
                                                <table class="es-content-body" style="background-color: #f7f7f7;" width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure" align="left" style="border-radius: 0px 0px 10px 10px; background-position: center bottom; background-color: #ffffff;">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer" height="15"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="esd-structure" align="left" style="background-position: left top;">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer" height="40"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
        
        </html>`;
        return this.sendmail(message, email)
    }
}
