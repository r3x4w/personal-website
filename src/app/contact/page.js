import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'تماس با من'
}


export default function ContactPage() {
  return (
    <section className='pt-12'>
      <div className='pb-28 text-center'>
        <h1 className='pb-4 text-3xl text-zinc-950'>تماس با من</h1>
        <p>در این قسمت می تونید راه های برقراری تماس با من رو ببینید</p>
      </div>
      <ContactForm />
    </section>
  );
}
