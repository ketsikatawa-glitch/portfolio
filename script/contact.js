export default function Contact(container) {
  container.innerHTML = 
  `
    <div class='container-contact js-container-contact'>
      <div class='contact-social-section'>
        <div class='contact'>
          <p class='box-title-contact-section'> Contact Info </p>
          <div class='line'> </div>
          <div class='contact-info-container'>
            <div class='group-contact-info'>
              <div class='img-align-contact-info'>  
                <img src='./icon/mail.png' alt='mail'>
                <p> Mail Us </p>
              </div>
              <div class='js-mail-account'> </div>
            </div>
            <div class='line'></div>
            <div class='group-contact-info'>
              <div
              class='img-align-contact-info'>
                <img src='./icon/phone.png' alt='phone'>
                <p> Contact Us </p>
              </div>
              <div class='js-contact-list'> </div>
            </div>
            <div class='line'> </div>
            <div class='group-contact-info'>
              <div
              class='img-align-contact-info'>
                <img src='./icon/map-pin.png' alt='address'>
                <p> Address </p>
              </div>
              <div class='js-address-list'> </div>
            </div>
          </div>
        </div>

        <div class='social'>
          <p class='box-title-contact-section'> Social Info </p>
          <div class='line'> </div>
          <div class='js-social-img-list img-social-info'> </div>
        </div>

      </div>

      <div class='form-section'>
        <p> Let's Work Together. </p>
        <form class='input-info-message'>
          <input type='text' placeholder='Name*'>
          <input type='email' placeholder='Email*'>
          <input type'text' placeholder='Subject'>
          <textarea placeholder="Message*"></textarea>
          <input id='input-submit' type='submit' value='Send Message'>
        </form>
      </div>
    </div>
  `;

  const mailAccountList = document.querySelector('.js-mail-account');
  const contactNumberList = document.querySelector('.js-contact-list');
  const addressInfo = document.querySelector('.js-address-list');
  const imgSocialList = document.querySelector('.js-social-img-list');

  //Mail
  [
    {mailAccount : 'example23@gmail.com'},
    {mailAccount : 'example24@gmail.com'}
  ].forEach((value) => {
    mailAccountList.innerHTML += 
    `
      <p> ${value.mailAccount} </p>
    `;
  });

  //Contact Number
  [
    {contactNumber : '+639832942132'},
    {contactNumber : '+639321032933'}
  ].forEach((value) => {
    contactNumberList.innerHTML += 
    `
      <p> ${value.contactNumber} </p>
    `
  });

  //Address Location
  [
    {addressInfo : '#21 Example, Manila, Philippines'}
  ].forEach((value) => {
    addressInfo.innerHTML += `<p> ${value.addressInfo} </p>`;
  });

  [
    {
      appImg : './icon/appImg/communication.png',
      appName : 'Facebook',
      accountName : 'Hoo Lee Shit'
    },
    {
      appImg : './icon/appImg/logos.png',
      appName : 'Twitter / X',
      accountName : 'Hoo Lee Shit'
    },
    {
      appImg : './icon/appImg/instagram.png',
      appName : 'Instagram',
      accountName : 'Hoo Lee Shit'
    }
  ].forEach((value) => {
    imgSocialList.innerHTML += 
    `
      <div class='social-apps-container'>
        <div>
          <img class='img-social-app' src='${value.appImg}'> ${value.appName}
        </div>
        <div class='line'></div>
        <p>Account : ${value.accountName} </p>
      </div>
    `
  });

} 