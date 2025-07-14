import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone:false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
// onSubmit(form: any) {
//   if (form.valid) {
//     console.log('Form Submitted:', form.value);
//     alert('Thanks! We will get back to you soon.');
//     form.reset();
//   }
// }
 formData = {
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    question: ''
  };

  submitForm() {
    const toEmail = 'sudeeppalai28.com'; // Replace with your actual email

    const subject = encodeURIComponent(this.formData.subject);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\n` +
      `Phone: ${this.formData.phone}\n` +
      `Email: ${this.formData.email}\n` +
      `Company: ${this.formData.company}\n\n` +
      `Question:\n${this.formData.question}`
    );

    const mailtoLink = `mailto:${toEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  }

}
