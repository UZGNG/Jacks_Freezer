import React from 'react'
const Contact = () => {

    const [formData, setFormData] = React.useState(

        {

            email: "",

            password: ""

        }

    )



    function handleChange(event) {

        setFormData(prevFormData => {

            return {

                ...prevFormData,

                [event.target.name]: event.target.value

            }

        })

    }



    function handleSubmit(event) {

        // event.preventDefault()

        fetch('http://localhost:3001/api/user/create', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify(formData)

        }).then((res) => {

            return res.json()

        }).then((body) => {

            console.log(body)

        })

    }
    return (
        <main>
            <div className="register">
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <h2 className='contact-header'>Sign Up!</h2>
                    <ul>
                        <li><label for="email"><b>Email</b></label></li>
                        <li><input type="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email} required /></li>
                        <li><label for="psw"><b>Password</b></label></li>
                        <li><input required type="password" placeholder="Password" onChange={handleChange} name="password" value={formData.password} /></li>
                    </ul>
                    <button type='submit' className='signup-btn'>Sign Up</button>
                </form>
            </div>
        </main>

    )


}

export default Contact