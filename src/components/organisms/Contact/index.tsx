import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import { Animate, ContainCenter, Title } from '@components/index'
import {
  ContentContact,
  Description,
  BoxContact,
  Form,
  Row,
  Label,
  BtnSubmit,
  Error
} from './styledComponents'
import 'animate.css'

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const sendEmail = (formData: any) => {
    console.log(formData)

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
      <ContainCenter>
        <Animate
          entranceAnimation="animate__zoomIn"
          exitAnimation="animate__zoomOut">
          <BoxContact>
            <Title type={2} text="Contáctanos" color="#000" align="center" />

            <Description>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              atque aliquam optio ad laudantium provident porro? Qui, rerum
              ratione vel cumque quod odio tenetur obcaecati ex, ullam magnam
              culpa ab!
            </Description>

            <Form onSubmit={handleSubmit(sendEmail)}>
              <Row>
                <Label>Nombre Completo</Label>
                <input
                  className={errors.phone && 'field-error'}
                  {...register('name', { required: true })}
                  placeholder="Nombre Completo"
                />
                {errors?.name && (
                  <Error>* El campo Nombre es obligatorio</Error>
                )}
              </Row>

              <Row>
                <Label>Email</Label>
                <input
                  className={errors.phone && 'field-error'}
                  {...register('email', {
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                  })}
                  placeholder="Correo Electronico"
                />

                {errors?.email && (
                  <Error>* El campo Email es obligatorio</Error>
                )}
              </Row>

              <Row>
                <Label>Telefono</Label>
                <input
                  type="number"
                  {...register('phone')}
                  placeholder="Telefono"
                />
              </Row>

              <Row>
                <Label>Mensaje</Label>
                <textarea
                  rows={8}
                  className={errors.phone && 'field-error'}
                  {...register('message', { required: true })}
                  placeholder="Mensaje"
                />
                {errors.message && (
                  <Error>* El campo Mensaje es obligatorio</Error>
                )}
              </Row>

              <BtnSubmit className="content-submit">
                <input type="submit" value="Enviar" />
              </BtnSubmit>
            </Form>
          </BoxContact>
        </Animate>
      </ContainCenter>
    </ContentContact>
  )
}

// import { GrContact } from "react-icons/gr";
// import { Title } from "@components";
// import {
//     ContentContact,
//     ContainerContact,
//     ContentForm,
//     Description,
//     ContentInfo,
//     Form,
//     Row,
//     Error,
// } from "./styled";

// export const Contact = ({ dataContact }) => {

//     const sendEmail = (formData) => {
//         emailjs
//             .send(
//                 "service_h6ceosv",
//                 "template_7967x7g",
//                 formData,
//                 "8w2P9Wvy37sZ2KYly"
//             )
//             .then((resp) => {
//                 console.log("Success!", resp);
//                 Swal.fire(success.title, success.description, "success");
//                 reset();
//             })
//             .catch((err) => {
//                 console.error("Failed...", err);
//                 Swal.fire(error.title, error.description, "error");
//             });
//     };

//     return (
//         <ContentContact>
//             <ContainerContact>
//                 <ContentForm>
//                     <ContentInfo>
//                         <Title title={dataContact.title} />
//                         <Description>{description}</Description>
//                         <GrContact />
//                     </ContentInfo>

//                     <Form onSubmit={handleSubmit(sendEmail)}>
//                         <Row>
//                             <label>{fields.name}</label>
//                             <input
//                                 className={errors.name ? "field-error" : ""}
//                                 name="name"
//                                 {...register("name", { required: true })}
//                             />
//                             {errors.name && (
//                                 <Error>Este campo es Obligatorio</Error>
//                             )}
//                         </Row>

//                         <Row>
//                             <label>{fields.email}</label>
//                             <input
//                                 className={errors.email ? "field-error" : ""}
//                                 name="email"
//                                 {...register("email", {
//                                     required: true,
//                                     pattern:
//                                         /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
//                                 })}
//                             />
//                             {errors.email && (
//                                 <Error>Este campo es Obligatorio</Error>
//                             )}
//                         </Row>

//                         <Row>
//                             <label>{fields.message}</label>
//                             <textarea
//                                 rows="8"
//                                 className={errors.message ? "field-error" : ""}
//                                 name="message"
//                                 {...register("message", { required: true })}
//                             />
//                             {errors.message && (
//                                 <Error>Este campo es Obligatorio</Error>
//                             )}
//                         </Row>

//                         <Row className="content-submit">
//                             <input type="submit" value="Enviar" />
//                         </Row>
//                     </Form>
//                 </ContentForm>
//             </ContainerContact>
//         </ContentContact>
//     );
// };
