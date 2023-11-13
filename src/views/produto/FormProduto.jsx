import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto () {

    const [titulo,setTitulo] = useState();
    const [codigo,setCodigo] = useState();
    const [descricao,setDescricao ] = useState();
    const [valorUnitario,setValorUnitario ] = useState();
    const [tempoEntregaMinimo,setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo,setTempoEntregaMaximo ] = useState();
 
    function salvar() {
 
     let produtoRequest = {
         titulo : titulo ,
         codigo: codigo,
         descricao: descricao,
         valorUnitario: valorUnitario,
         tempoEntregaMinimo:tempoEntregaMinimo,
         tempoEntregaMaximo : tempoEntregaMaximo
     }
 
  axios.post("http://localhost:8080/api/produto", produtoRequest)
     .then((response) => {
          console.log('produto cadastrado com sucesso.')
     })
     .catch((error) => {
          console.log('Erro ao incluir o um produto.')
     })
 }
    return (

        <div>
            <MenuSistema />

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
                                    value={titulo}
			                        onChange={e => setTitulo(e.target.value)}

                                />

                                <Form.Input

                                    fluid
                                    label='Codigo do produto'> 
                                    <InputMask
                                        required
                                        value={codigo}
			                        onChange={e => setCodigo(e.target.value)}
                                    />
                                    
                                </Form.Input>
                                </Form.Group>
                               
                                <Form.Group widths='equal'>
                                             
                                <Form.Input
                                    required
                                    fluid
                                    label='Descrição'
                                    maxLength="300"
                                    value={descricao}
			                        onChange={e => setDescricao(e.target.value)}
                                />
                               </Form.Group>

                               <Form.Group widths='equal'>
                                             
                                <Form.Input
                                    fluid
                                    label='Valor unitario'
                                    maxLength="300"
                                    value={valorUnitario}
			                        onChange={e => setValorUnitario(e.target.value)}
                                    
                                />

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega minímo em minutos'
                                    maxLength="300"
                                    placeholder="30"
                                    value={tempoEntregaMinimo}
			                        onChange={e => setTempoEntregaMinimo(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Tempo de entrega maxíma em minutos'
                                    maxLength="300"
                                    placeholder="40"
                                    value={tempoEntregaMaximo}
			                        onChange={e => setTempoEntregaMaximo(e.target.value)}
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
                                <Link to={'/list-produto'}>Voltar</Link>

                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
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
