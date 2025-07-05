import { Box, Button, Card, CardActionArea, CardContent, Container, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import type { TodosData,Todores } from './Todo'

interface AllTodoDataProps {
    todoData: TodosData[],
    updateTodo:(todo:Todores)=>void
}
export const AllTodos: React.FC<AllTodoDataProps> = ({ todoData,updateTodo }) => {
    const [selectedCard,setSelectedCard]=useState<string>('')

    const updateHandle=(data:Todores)=>{
        updateTodo(data)
    }
    return (
        <>
            <Container maxWidth="md" sx={{ border: 1, mt: 3 }}>

                <Divider sx={{ mx: 'auto' }}>Your Todos</Divider>
                <Grid container spacing={2} sx={{ mt: 2 }} justifyContent='center'>
                   
                        {
                            todoData?.map((item) => {
                               return  <Grid size={{ xs: 8, sm: 6, md: 3 }} sx={{ border: 1 }}>
                                <Card key={item.todo.email}>
                                    <CardActionArea
                                        onClick={() => setSelectedCard(item.todo.email)}
                                        data-active={selectedCard === item.todo.email ? '' : undefined}
                                        sx={{
                                            height: '100%',
                                            '&[data-active]': {
                                                backgroundColor: 'action.selected',
                                                '&:hover': {
                                                    backgroundColor: 'action.selectedHover',
                                                },
                                            },
                                        }}
                                    >
                                        <CardContent sx={{ height: '100%', pb: 1 }}>
                                            <Typography variant="h5" component="div">
                                                {item.todo.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                               {item.todo.email}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                               {item.todo.phone}
                                            </Typography>
                                            <Box  sx={{ border: 1, mt: 3, mb: 0, display: 'flex', justifyContent: 'space-around' }}>
                                                <Button onClick={()=>updateHandle(item.todo)} variant='contained' sx={{mr:1}}>updat</Button>
                                                <Button variant='contained' sx={{ml:1}}>complete</Button>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                 </Grid>
                            })
                        }


                   
                    {/* <Grid size={{ xs: 8, sm: 6, md: 3 }} sx={{ border: 1 }}>grid1</Grid>
                    <Grid size={{ xs: 8, sm: 6, md: 3 }} sx={{ border: 1 }}>grid1</Grid>
                    <Grid size={{ xs: 8, sm: 6, md: 3 }} sx={{ border: 1 }}>grid1</Grid>
                    <Grid size={{ xs: 8, sm: 6, md: 3 }} sx={{ border: 1 }}>grid1</Grid> */}
                </Grid>

            </Container>
        </>
    )
}
