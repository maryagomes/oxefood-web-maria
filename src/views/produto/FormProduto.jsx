import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProduto () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="300"
                                    placeholder="Informe o título do produto"
                                />

                                <Form.Input

                                    fluid
                                    label='Codigo do produto'> 
                                    <InputMask
                                        required
                                    />
                                    
                                   
                                </Form.Input>
                                </Form.Group>
                               
                                <Form.Group widths='equal'>
                                             
                                <Form.Input
                                    required
                                    fluid
                                    label='Descrição'
                                    maxLength="100"
                                    placeholder="Informe a descrição do produto"
                                />
                               </Form.Group>

                               <Form.Group widths='equal'>
                                             
                                <Form.Input
                                    fluid
                                    label='Valor unitario'
                                    maxLength="300"
                                    
                                />

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega minímo em minutos'
                                    maxLength="300"
                                    placeholder="30"
                                />
                                <Form.Input
                                    fluid
                                    label='Tempo de entrega maxíma em minutos'
                                    maxLength="300"
                                    placeholder="40"
                                />

                            </Form.Group>
                            
                           
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

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
