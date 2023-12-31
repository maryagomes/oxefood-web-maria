import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function FormEntregador() {

    return (

        <div>
            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified'>

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100" />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99" />
                                </Form.Input>


                                <Form.Input

                                    fluid
                                    label='RG'>
                                    <InputMask
                                        required />


                                </Form.Input>
                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}>
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985" />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999" />

                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone fixo'
                                    maxLength="100" />



                                <Form.Input
                                    required
                                    fluid
                                    label='QTD de entregas realizadas'
                                    maxLength="100" />

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor por frete'
                                    maxLength="100" />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    maxLength="100" />

                                <Form.Input
                                    fluid
                                    label='Número'
                                    maxLength="100" />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="100" />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    maxLength="100" />
                                <Form.Input
                                    fluid
                                    label='Cep'
                                    maxLength="300" />

                            </Form.Group>
                            <Form.Group widths='equal'>
                                
                                <Form.Input>
                                  
                                  <label for="cars">Uf:</label>
                                  <select name="CIDADE" id="CIDADE">
                                   <option value="JB">Jaboatão</option>
                                        <option value="RE">Recie</option>
                                          </select>
                                          </Form.Input>
                            </Form.Group>
                                 
                            


                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    maxLength="100" />
                            </Form.Group>

                                </Form>

                                <div style={{ marginTop: '4%' }}>

                                    <Button
                                        type="button"
                                        inverted
                                        circular
                                        icon
                                        labelPosition='left'
                                        color='orange'
                                    >
                                        <Icon name='reply' />
                                        Listar
                                    </Button>

                                    <Button
                                        inverted
                                        circular
                                        icon
                                        labelPosition='left'
                                        color='blue'
                                        floated='right'
                                    >
                                        <Icon name='save' />
                                        Salvar
                                    </Button>

                                </div>

                            </div>

                        </Container>
                    </div>
                </div> 

            );

}

       




