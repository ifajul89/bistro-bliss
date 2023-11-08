// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import "./Register.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
    // const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.photo.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="register-bg flex w-full rounded-xl container mx-auto">
            <div className="w-[600px] p-3 md:p-10 flex flex-col justify-center space-y-5">
                <div>
                    <h3 className="font-bold text-3xl">Welcome User</h3>
                    <p className="font-light text-lg">
                        Create Your Account With Email and Password
                    </p>
                </div>
                <form onSubmit={handleRegister} className="space-y-3">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            className="input input-bordered w-full focus:outline-none"
                            name="name"
                            type="text"
                            placeholder="Type Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="photo">Photo URL</label>
                        <input
                            className="input input-bordered w-full focus:outline-none"
                            name="photo"
                            type="text"
                            placeholder="Enter Photo Url"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className="input input-bordered w-full focus:outline-none"
                            name="email"
                            type="email"
                            placeholder="Type Your Email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            className="input input-bordered w-full focus:outline-none"
                            name="password"
                            type="password"
                            placeholder="Type Your Password"
                            required
                        />
                    </div>
                    <input
                        className="btn w-full bg-pink-700 hover:bg-pink-800 text-white font-semibold"
                        type="submit"
                        value="Register"
                    />
                </form>
            </div>
        </div>
    );
};

export default Register;
