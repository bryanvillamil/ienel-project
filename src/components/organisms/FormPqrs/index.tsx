/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
// import emailjs from '@emailjs/browser'
import { Animate, Title } from '@components/index'
import { IContactContent } from '@typed/contact'
import {
  ContentContact,
  Description,
  BoxContact,
  Form,
  Row,
  Label,
  BtnSubmit,
  Error,
  BoxRight
} from './styledComponents'
import 'animate.css'

export const FormPqrs = ({ dataContact }: { dataContact: IContactContent }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  // const { descripcionPrincipal } = dataContact

  const sendEmail = async (formData: any) => {
    console.log(formData)
    await Swal.fire(
      '¡Gracias!',
      'Tu mensaje ha sido enviado correctamente.',
      'success'
    )
    reset()

    // emailjs
    //     .send(
    //       "service_h6ceosv",
    //       "template_7967x7g",
    //       formData,
    //       "8w2P9Wvy37sZ2KYly"
    //     )
    //     .then((resp) => {
    //         console.log("Success!", resp);
    //         Swal.fire('¡Gracias!', 'Tu mensaje ha sido enviado correctamente.', "success");
    //         reset();
    //     })
    //     .catch((err) => {
    //         console.error("Failed...", err);
    //         Swal.fire('¡Uupps, Error!', 'Tu mensaje no pudo ser enviado.', "error");
    //     });
  }

  return (
    <ContentContact name="contact" id="contact">
      <Animate
        entranceAnimation="animate__zoomIn"
        exitAnimation="animate__zoomOut">
        <BoxContact>
          <BoxRight>
            <Title type={2} text="PQRs" color="#000" align="center" />

            <Description>
              Bienvenido a nuestra sección de PQRs, donde tu opinión es
              importante para nosotros. Aquí puedes presentar tus Peticiones,
              realizar Quejas o plantear Reclamos sobre nuestros productos,
              servicios o cualquier aspecto relacionado con nuestra empresa.
              Nuestro objetivo es brindarte una atención personalizada y
              resolver tus inquietudes de manera efectiva y oportuna. Utiliza
              este formulario para hacernos saber cómo podemos mejorar y
              brindarte una experiencia excepcional. Agradecemos tu colaboración
              para seguir creciendo juntos.
            </Description>

            <Form onSubmit={handleSubmit(sendEmail)}>
              <Row className="name">
                <Label htmlFor="name">Nombre Completo</Label>
                <input
                  id="name"
                  className={errors.phone && 'field-error'}
                  {...register('name', { required: true })}
                  placeholder=""
                />
                {errors?.name && (
                  <Error>* El campo Nombre es obligatorio</Error>
                )}
              </Row>

              <Row className="email">
                <Label htmlFor="email">Email</Label>
                <input
                  id="email"
                  className={errors.phone && 'field-error'}
                  {...register('email', {
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                  })}
                  placeholder=""
                />

                {errors?.email && (
                  <Error>* El campo Email es obligatorio</Error>
                )}
              </Row>

              <Row className="phone">
                <Label htmlFor="phone">Telefono</Label>
                <input
                  type="number"
                  id="phone"
                  {...register('phone')}
                  placeholder=""
                />
              </Row>

              <Row className="message">
                <Label htmlFor="message">Mensaje</Label>
                <textarea
                  rows={8}
                  id="message"
                  className={errors.message && 'field-error'}
                  {...register('message', { required: true })}
                  placeholder=""
                />
                {errors.message && (
                  <Error>* El campo Mensaje es obligatorio</Error>
                )}
              </Row>

              <BtnSubmit className="content-submit">
                <button type="submit">Enviar</button>
              </BtnSubmit>
            </Form>
          </BoxRight>
        </BoxContact>
      </Animate>
    </ContentContact>
  )
}
