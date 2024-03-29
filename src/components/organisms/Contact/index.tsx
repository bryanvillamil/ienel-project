/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
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
  BoxLeft,
  BoxRight
} from './styledComponents'
import 'animate.css'

export const Contact = ({ dataContact }: { dataContact: IContactContent }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const { titulo, imgenesPrincipalesCollection, descripcionPrincipal } =
    dataContact

  const sendEmail = async (formData: any) => {
    console.log(formData)
    await Swal.fire(
      '¡Gracias!',
      'Tu mensaje ha sido enviado correctamente.',
      'success'
    )
    reset()

    emailjs
      .send(
        'service_zbnx1jr',
        'template_j0h4sm4',
        formData,
        '8oQUMfpdxRYvgcVPU' // api key
      )
      .then((resp) => {
        console.log('Success!', resp)
        Swal.fire(
          '¡Gracias!',
          'Tu mensaje ha sido enviado correctamente.',
          'success'
        )
        reset()
      })
      .catch((err) => {
        console.error('Failed...', err)
        Swal.fire('¡Uupps, Error!', 'Tu mensaje no pudo ser enviado.', 'error')
      })
  }

  return (
    <ContentContact name="contact" id="contact">
      <Animate
        entranceAnimation="animate__zoomIn"
        exitAnimation="animate__zoomOut">
        <BoxContact>
          <BoxLeft>
            <Image
              src={imgenesPrincipalesCollection.items[0].url}
              alt={imgenesPrincipalesCollection.items[0].title}
              width={1980}
              height={1200}
              style={{ objectFit: 'cover' }}
            />
          </BoxLeft>
          <BoxRight>
            <Title type={2} text={titulo} color="#000" align="center" />

            <Description>
              {descripcionPrincipal.json.content[0].content[0].value}
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
