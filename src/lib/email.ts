'use server';

import { ReactElement } from 'react';
import { CreateEmailResponse, Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type Template<T> = (props: T) => React.ReactElement

export async function sendEmail<T>(to: string[], subject: string, template:Template<T>, props: T): Promise<CreateEmailResponse> {
    return await resend.emails.send({
        from: 'TubiOb <tubiobaloluwa@gmail.com>',
        to,
        subject,
        react: template(props) as ReactElement,
    });
}