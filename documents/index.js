module.exports = (values) => {
  const {
    // Profile-Information
    firstname,
    lastname,
    email,
    phone,
    address,
    linkedin,

    // Education Information
    college,
    fromyear1,
    toyear1,
    qualification1,
    cgpa1,
    school,
    fromyear2,
    toyear2,
    qualification2,
    cgpa2,

    // Project Information...
    title1,
    projectDescription1,
    title2,
    projectDescription2,

    // Experience Information
    institute1,
    position1,
    duration1,
    experienceDescription1,
    institute2,
    position2,
    duration2,
    experienceDescription2,

    // Extra Information
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    interest1,
    interest2,
    interest3,
    interest4,
    interest5,
    interest6,
  } = values;

  let htmlTemplate = `
  <!DOCTYPE html>
    <html>
    <head>
    <title>${firstname}'s Resume</title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,600&display=swap" rel="stylesheet">
	<style>
	* {
		box-sizing: border-box;
		transition: 0.35s ease;
		font-style: normal;
	  }
	  html{
		height:100%;
	  }
	  .rela-block {
		width: 100%;
		display: block;
		position: relative;
		margin: auto;
		top: ;
		left: ;
		right: ;
		bottom: ;
		font-style: normal;
	  }
	  .rela-inline {
		display: inline-block;
		position: relative;
		margin: auto;
		top: ;
		left: ;
		right: ;
		bottom: ;
		font-style: normal;
	  }
	  body {
		font-family: 'Roboto Slab';
		font-size: 18px;
		letter-spacing: 0px;
		font-weight: 400;
		line-height: 28px;
		background-size: cover;
		font-style: normal;
		background-color:#f2f2f2;
		min-height: 100vh;
	  }
	  .caps {
		text-transform: uppercase;
	  }
	  .justified {
		text-align: justify;
	  }
	  p.light {
		color: #777;
		font-size: 14px;
		font-style: normal;
	  }
	  h2 {
		font-family: 'Roboto Slab', serif;
		font-size: 30px;
		letter-spacing: 5px;
		font-weight: 600;
		line-height: 40px;
		color: #000;
		font-style: normal;
	  }
	  h3 {
		font-family: 'Roboto Slab', serif;
		font-size: 21px;
		letter-spacing: 1px;
		font-weight: 600;
		line-height: 28px;
		color: #000;
	  }
	  .left-content{
		line-height:2.5;
		font-size:25px;
	  }
	  .right-content{
		line-height:1.8;
		font-size:25px;
	  }
	  .top-bar {
		width:100%;
		display: block;
		z-index: 9999;
		height: 200px;
		position: absolute;
		top:170px;
		background-color: #dddddf;
		color: #fff;
	  }
	  .name {
		right:1000px;
		height: 150px;
		font-size: 80px;
		letter-spacing: 8px;
		font-weight: 600;
		line-height: 60px;
		font-style: normal;
		color:black;
		position: absolute;
		top: 38%;
		left: 36%;
		bottom: false;
		width: 70%;
	  }
	  .name div {
		width: 94%;
	  }
	  .side-bar {
		display: false;
		position: absolute;
		top:0px;
		width: 420px;
		background-color: #2e2e30;
		padding: 450px 30px 50px;
		height:100%;
		color:#fff;
	  }
	  .side-header {
		font-family: 'Roboto Slab', serif;
		font-size:35px;
		letter-spacing: 4px;
		font-weight: 800;
		margin: 60px auto 10px;
		padding-bottom: 15px;
		border-bottom: 1px solid #888;
	  }
	  .content-container {
		margin-right: 0;
		width: calc(95% - 350px);
		padding: 511px 40px 50px;
	  }
	  .content-container > * {
		margin: 0 auto 25px;
	  }
	  .content-container > h3 {
		margin: 0 auto 5px;
	  }
	  .content-container > p.long-margin {
		margin: 0 auto 50px;
	  }
	  @media screen and (max-width: 1150px) {
		.name {
		  color: #fff;
		  font-family: 'Roboto Slab';
		  font-size: 38px;
		  letter-spacing: 6px;
		  font-weight: 100;
		  line-height: 48px;
		}
	  }	  
	</style>
    </head>
	<body>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <div>
        <div class="top-bar">
			<div class="caps name">${firstname} ${lastname}</div>
        </div>
        <div class="side-bar">
		<p class="caps side-header">Contact</p>
			<p class="mb-1 ml-3 left-content"><span style="padding-right:10px; font-size:25px;"><i class="fa fa-envelope"></i></span>${email}</p>
			<p class="mb-1 ml-3 left-content"><span style="padding-right:10px; font-size:25px;"><i class="fas fa-phone-alt"></i></span>${phone}</p>
			<p class="mb-1 ml-3 left-content"><span style="padding-right:10px; font-size:25px;"><i class="fa fa-home"></i></span>${address}</p>
			<p class="mb-1 ml-3 left-content"><span style="padding-right:10px; font-size:25px;"><i class="fab fa-linkedin"></i></span>${linkedin}</p>
			`;
  if (skill1 != "" || skill1 != null)
    htmlTemplate += `<p class="rela-block caps side-header" style="margin-top:100px;">Skills</p>
				<ul>
				<li> <p class="rela-block left-content">${skill1}</p> </li>`;
  if (skill2 != "" || skill2 != null)
    htmlTemplate += `
	<li> <p class="rela-block left-content">${skill2}</p> </li>`;
  if (skill3 != "" || skill3 != null)
    htmlTemplate += ` <li> <p class="rela-block left-content" >${skill3}</p></li>`;
  if (skill4 != "" || skill4 != null)
    htmlTemplate += `<li> <p class="rela-block left-content">${skill4}</p></li>`;
  if (skill5 != "" || skill5 != null)
    htmlTemplate += `<li> <p class="rela-block left-content">${skill5}</p></li>`;
  if (skill6 != "" || skill6 != null)
    htmlTemplate += `<li> <p class="rela-block left-content">${skill6}</p></li> </ul>`;

  if (interest1 != "" || interest1 != null)
    htmlTemplate += `<p class="rela-block caps side-header" style="margin-top:100px;">Interests</p>
	<ul>
	<li> <p class="rela-block left-content">${interest1}</p> </li>`;
  if (interest2 != "" || interest2 != null)
    htmlTemplate += `<li> <p class="rela-block left-content">${interest2}</p> </li>`;
  if (interest3 != "" || interest3 != null)
    htmlTemplate += `<li> <p class="rela-block left-content">${interest3}</p> </li>`;
  if (interest4 != "" || interest4 != null)
    htmlTemplate += `<li> <p class="rela-block left-content">${interest4}</p> </li>`;
  if (interest5 != "" || interest5 != null)
    htmlTemplate += `<li> <p class="rela-block left-content">${interest5}</p> </li>`;
  if (interest6 != "" || interest6 != null)
    htmlTemplate += `<li> <p class="rela-block left-content">${interest6}</p> </li></ul>`;

  htmlTemplate += `
  			</div>
			<div class="rela-block content-container">
			
			<div class="rela-block caps side-header">Education</div>
            <h3 class="right-content mb-0">${qualification1}</h3>
			<p class="justified mt-0 mb-0 right-content">${college}<span class="ml-5 pl-5">CGPA: ${cgpa1}</span></p>
			<p class="justified mt-0 mb-3 right-content">${fromyear1}-${toyear1}</p>
            <h3 class="right-content mb-0 mt-5">${qualification2}</h3>
			<p class="justified mt-0 mb-0 right-content">${school}<span class="ml-5 pl-5">CGPA: ${cgpa2}</span></p>
			<p class="justified mt-0 mb-0 right-content">${fromyear2}-${toyear2}</p>

			
            <div class="rela-block caps side-header" style="margin-top:100px;">Experience</div>
            <h3 class="right-content">${institute1}</h3>
            <p class="justified mt-0 mb-0 right-content">${position1}<span class="ml-5 pl-5">Duration: ${duration1}</span></p>
            <p class="justified right-content">${experienceDescription1}</p>
            <h3 class="right-content mt-5">${institute2}</h3>
            <p class="justified mt-0 mb-0 right-content">${position2}<span class="ml-5 pl-5">Duration: ${duration2}</span></p>
            <p class="justified right-content">${experienceDescription2}</p>

			<div class="rela-block caps side-header" style="margin-top:100px;">Projects</div>
            <h3 class="right-content">${title1}</h3>
            <p class="justified right-content">${projectDescription1}</p>
            <h3 class="right-content mt-5">${title2}</h3>
            <p class="justified right-content">${projectDescription2}</p>
			
        </div>
    </div>
    </body>
    </html>
  `;
  return htmlTemplate;
};
