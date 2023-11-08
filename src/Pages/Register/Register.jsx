import LogInBg from "../../assets/login.jpg";
import { MdOutlineCancel } from "react-icons/md";

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.photo.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
    };

    return (
        <div className="bg-white flex w-5/6 max-w-5xl relative rounded-xl">
            <div className="w-2/5 p-10 flex flex-col justify-center space-y-5">
                <h3 className="font-bold text-3xl">Welcome User</h3>
                <p className="font-light">Please Create Your Account</p>
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
            <div className="w-3/5">
                <img className="w-full rounded-r-xl" src={LogInBg} alt="" />
            </div>

            <form method="dialog" className="right-3 top-3 absolute">
                <button className="btn btn-ghost btn-sm p-0">
                    <MdOutlineCancel className="text-white text-3xl"></MdOutlineCancel>
                </button>
            </form>
        </div>
    );
};

export default Register;
