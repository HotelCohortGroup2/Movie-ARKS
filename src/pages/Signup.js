import "../styling/SignUp.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ signup }) => {
	const formRef = useRef();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData);
		const userInfo = {
			user: { email: data.email, password: data.password },
		};
		signup(userInfo);
		navigate("/");
		e.target.reset();
	};

	return (
		<div className="signup-container">
		<form ref={formRef} onSubmit={handleSubmit} className="signup-form">
			<label>Email:</label>
			<input type="email" name="email" placeholder="Enter your email" />
			<label>Password:</label>
			<input type="password" name="password" placeholder="Enter your password" />
			<label>Confirm Password:</label>
			<input
				type="password"
				name="password_confirmation"
				placeholder="Confirm your password"
			/>
			<button type="submit">Sign Up</button>
		</form>
		<div className="login-link">
			Already registered? <a href="/login">Login here</a>.
		</div>
	</div>
	);
	//  const [isClicked, setIsClicked] = useState(false)

	//  // Once submitted get it to redirect straight to log in page
	//   const handleClick = () => {
	//     setIsClicked(true)
	//     alert('Clicked')
	//   }

	//   return (
	//     <div className="signup-header">
	//         <Navbar />
	//         <h1>WHY WAIT?! SIGN UP TODAY!</h1>
	//         <br/>
	//         <div>
	//           <div className="Body">
	//             <div>
	//               <input type="email" placeholder="Email"></input>
	//             </div>
	//             <br/>
	//             <div>
	//               <input type="password" placeholder="Password"></input>
	//             </div>
	//             <br/>
	//             <div>
	//               <input type="password" placeholder="Confirm Password"></input>
	//             </div>

	//           </div>
	//           <br/>
	//           <div className="Footer">
	//             <button onClick={handleClick}>Sign up</button>
	//           </div>
	//         </div>
	//     </div>
	//   )
};

export default Signup;
