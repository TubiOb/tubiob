'use server';

import { ReactElement } from 'react';
import { CreateEmailResponse, Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type Template<T> = (props: T) => React.ReactElement

export async function sendEmail<T>(to: string[], subject: string, template:Template<T>, props: T): Promise<CreateEmailResponse> {
    return await resend.emails.send({
        from: 'TubiOb <onboarding@resend.dev>',
        to,
        subject,
        react: template(props) as ReactElement,
    });
}


export async function sendContactEmail(formData: { name: string, email: string, message: string }): Promise<{ success: boolean; message: string }> {
    try {
        const { ContactEmailTemplate } = await import('./../emails/ContactEmail')

        const result = await sendEmail(
            ['tubiobaloluwa@gmail.com'],
            `New Contact Form Message from ${formData.name}`,
            ContactEmailTemplate,
            formData,
        )

        if (result.error) {
            console.error('Email sending failed', result.error)
            return { success: false, message: 'Failed to send email. Please try again.' }
        }

        return { success: true, message: 'Email sent successfully!' }
    }
    catch (err) {
        console.error('', err)
        return { success: false, message: 'An error occurred. Please try again.' }
    }
}