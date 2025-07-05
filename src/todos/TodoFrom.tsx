import { Button, Container, Divider, Grid, TextField, Typography } from '@mui/material'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import type { Todores } from './Todo';
type formdata={
    name:string,
    email:string,
    phone:string
}

interface TodoProps{
    todo:Todores,
    addTodo:(todo:Todores)=>void
}

export const TodoFrom: React.FC<TodoProps> = ({todo,addTodo}) => {
    const initialSchema = Yup.object({
        name: Yup.string()
            .min(5, "minimum 5 charecter need")
            .required("name is requred"),
        email: Yup.string().email("invalid email").required("email is required"),
        phone: Yup.string().matches(/^01[0-9]{9}$/, 'Phone number must start with 01 and be 11 digits long').required("phone number is required")
        // password: Yup.string().min(6, "minmum 6 cheracter need").required("password required"),
        // cpassword: Yup.string().oneOf([Yup.ref("password")], "password is not match").required('Confirm password is required'),
    })
    const formik = useFormik<Todores>({
        initialValues: todo,
        enableReinitialize: true,
        validationSchema: initialSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            addTodo(values)
            resetForm()
        }

    })
    return (
        <>
            <Container maxWidth="md" sx={{ border: '1px solid red', mt: 5, p: 5 ,pb:1}} disableGutters>
                <Typography sx={{ textAlign: 'center' }} variant='h4'>Add Your Todo</Typography>
                <Divider sx={{ mt: 2, width: 300, mx: 'auto' }}>todos</Divider>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container sx={{ justifyContent: 'center', mt: 2 }} spacing={2}>
                        <Grid size={{ xs: 8, sm: 6 }} sx={{}} >
                            <TextField
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                helperText={formik.touched.name && formik.errors.name}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                fullWidth id="outlined-basic" label="Name" variant="outlined" />
                        </Grid>
                        <Grid size={{ xs: 8, sm: 6 }} sx={{}} >
                            <TextField
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                fullWidth id="outlined-basic" label="Emial" variant="outlined" />
                        </Grid>
                        <Grid size={{ xs: 8, sm: 6 }} sx={{}} >
                            <TextField
                                name="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                                fullWidth id="outlined-basic" label="phone" variant="outlined" />

                        </Grid>
                        {/* <Grid size={{ xs: 8, sm: 6 }} sx={{}} >
                            <TextField
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                fullWidth id="outlined-basic" label="Password" variant="outlined" />

                        </Grid> */}
                        {/* <Grid size={{ xs: 8, sm: 6 }} sx={{}} >
                            <TextField
                                name="cpassword"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cpassword}
                                error={formik.touched.cpassword && Boolean(formik.errors.cpassword)}
                                helperText={formik.touched.cpassword && formik.errors.cpassword}
                                fullWidth id="outlined-basic" label="Confirm Password" variant="outlined" />

                        </Grid> */}
                        <Grid size={{ xs: 8 }} sx={{}} >
                            <Button type='submit' fullWidth variant='contained' color='info'>Create Todo</Button>
                        </Grid>
                    </Grid>
                </form>

            </Container>
        </>
    )
}


