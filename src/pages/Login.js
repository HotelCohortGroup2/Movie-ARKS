import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
	const formRef = useRef();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData);
		const userInfo = {
			user: { email: data.email, password: data.password },
		};
		login(userInfo);
		navigate("/");
		e.target.reset();
	};

	return (
		<div className="auth-body">
			<h2 className="header">Login</h2>
			<form className="form-div" ref={formRef} onSubmit={handleSubmit}>
				Email:{" "}
				<input
					className="field auth-flex"
					type="email"
					name="email"
					placeholder="email"
				/>
				<br />
				Password:{" "}
				<input
					className="field auth-flex"
					type="password"
					name="password"
					placeholder="password"
				/>
				<br />
				<input className="actions" type="submit" value="Login" />
				<div className="links">
					Not registered yet?
					<a href="/signup">
						{" "}
						<u>Signup</u>
					</a>
				</div>
			</form>
		</div>
	);
	// 	const [isClicked, setIsClicked] = useState(false);

	// 	// Once submitted get it to redirect straight to log in page
	// 	const handleClick = () => {
	// 		setIsClicked(true);
	// 		alert("Clicked");
	// 	};

	// 	return (
	// 		<div className="signup-header">
	// 			<Header />
	// 			<h1>Login</h1>
	// 			<br />
	// 			<div className="Login-Form">
	// 				<div className="Login-Body">
	// 					<div>
	// 						<input type="email" placeholder="Please enter Email"></input>
	// 					</div>
	// 					<br />
	// 					<div>
	// 						<input type="password" placeholder="Password"></input>
	// 					</div>
	// 					<br />
	// 					<div className="Login-Footer">
	// 						<button onClick={handleClick}>Login</button>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
};

export default Login;
