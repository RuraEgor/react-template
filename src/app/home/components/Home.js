import React from 'react';

function Home (props) {
	const authLogOut = props.authLogOut
	
	return (
		<div className="container">
			<div className="wrap-page">
				<h1 className="g-title title_home">Home Page!
					<button onClick={authLogOut} className="g-btn btn_return">Logout</button>
				</h1>
				<p className="g-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad
					amet asperiores at atque
					cupiditate debitis dicta distinctio dolor dolorem enim esse facilis id illo illum ipsam iure
					maiores, nemo numquam odit officiis pariatur porro quibusdam quisquam saepe sapiente, soluta
					suscipit temporibus voluptates. Ab adipisci aliquam at consequuntur deleniti eum, fugiat
					inventore
					labore maiores, maxime mollitia nemo, numquam officia porro repellat soluta tempora ut
					voluptatibus.
					Ab cupiditate ea eligendi eum inventore laborum, non officiis quam repudiandae, sint sunt
					tenetur
					voluptatem. Aliquam architecto aut, blanditiis culpa deserunt excepturi id, iure maxime modi
					possimus repellendus saepe tempora tempore. Animi asperiores dignissimos, dolorum est expedita
					fuga
					itaque libero minus omnis perferendis quasi reiciendis suscipit ut vero voluptatem. Cum
					dignissimos
					dolores fugiat magnam mollitia quas reiciendis repellat velit. Amet architecto assumenda beatae
					doloribus ducimus et mollitia odit pariatur quis temporibus, velit vitae, voluptatem! Neque quam
					reiciendis rerum ullam. Asperiores aut expedita sint vel voluptatem. Atque delectus, dolor
					eligendi
					error expedita fugiat libero maiores, minima nesciunt obcaecati, sapiente sunt velit voluptate!
					Aliquid aperiam cum debitis dolor dolorum ea eligendi error, eveniet inventore ipsam labore,
					magni
					nesciunt nisi odit officia ratione repellat reprehenderit repudiandae soluta sunt tempora
					temporibus
					tenetur ut vel, voluptatibus. Consequatur, culpa, totam.</p>
				<p className="g-text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam animi consequatur
					consequuntur deleniti eligendi ipsa iure minima nesciunt officia! A aspernatur at autem beatae
					deserunt, dicta ea ex excepturi exercitationem facere fuga itaque neque nihil numquam odio
					praesentium quam recusandae reiciendis reprehenderit temporibus veritatis voluptas voluptatum?
					Adipisci aspernatur deserunt maxime nostrum, nulla quaerat unde voluptate? Ad, deserunt enim
					fugiat modi reprehenderit sed sint velit. Adipisci molestias quasi rem? Aliquam aliquid animi,
					architecto commodi debitis dolore doloremque doloribus error ipsam laboriosam laudantium nisi
					nostrum nulla, officia reiciendis rem sapiente. Atque consequatur est eveniet fugit inventore
					non voluptatum. Amet animi aspernatur, consequatur deleniti dolor doloribus ea, eos esse eum
					fugit laboriosam magni minima molestiae non perferendis tempore vel, voluptas. Amet, consectetur
					deserunt dolorum ex facere illo in ipsam maxime necessitatibus nihil, quaerat quibusdam quidem
					tenetur ullam unde? Atque cumque ipsa recusandae. Aperiam dignissimos dolorum eaque earum ipsum
					iusto molestiae nam. Ab aliquam autem cum dignissimos dolore ea expedita ipsum necessitatibus
					tempore vitae. Aliquam ipsam provident quas! Alias aut cupiditate dignissimos dolorum eos est
					expedita facere facilis id illum laboriosam laudantium magni modi molestiae nam nesciunt nulla
					numquam, officia officiis optio pariatur perspiciatis provident quaerat quisquam, sequi suscipit
					temporibus tenetur veritatis vitae?
				</p>
			</div>
		</div>
	)
}

export default Home