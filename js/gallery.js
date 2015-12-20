
 angular.module('stylesApp', [])
  .controller('GalleryController', function() {
	var model = this;
    
	
    
	model.photos = [];
	
	
		model.photos.push({src:'images/gallery/9_cones.jpg'});
		model.photos.push({src:'images/gallery/air_show.jpg'});
		model.photos.push({src:'images/gallery/air_show2.jpg'});
		model.photos.push({src:'images/gallery/an_icecream.jpg'});
		model.photos.push({src:'images/gallery/article.jpg'});
		model.photos.push({src:'images/gallery/band.jpg'});
		model.photos.push({src:'images/gallery/best_farmer.jpg'});
		model.photos.push({src:'images/gallery/Briddicott_harvest.png'});
		model.photos.push({src:'images/gallery/Briddicottfarm.png'});
		
		var faqs = [];
		faqs.push({id:'faqOne', question: 'How do I become a Styles Ice Cream stockist?', answer: 'If you are interested in selling our ice cream, please do call or email us at your earliest convenience. We will then arrange to come and see you with samples of our ice cream and further information as to why you should choose Styles!'});
		faqs.push({id:'faqTwo', question: 'What sizes can I purchase your ice cream in?', answer: 'Most of our ice cream can be purchased in 120ml, 550ml, 1ltr, 2ltr, 4ltr, 10ltrs or 4.5ltr Napoli’s.'});
		faqs.push({id:'faqThree', question: 'What point of sale is available and how much does this cost?', answer: 'Our point of sale material is free and comes as part of the package when you come on board with us, it includes; Pavement signs, flavours boards or menus and flags.'});
		faqs.push({id:'faqFour', question: 'Where do you deliver?', answer: 'We have a vast delivery circuit ourselves and we also have external distributors that deliver nationwide.'});
		faqs.push({id:'faqFive', question: 'I have a number of food allergies; can I eat your ice cream?', answer: 'All of our ice creams are gluten free and suitable for vegetarians, please click HERE to view our up to date allergens list to ensure our ice cream is right for you.'});
		faqs.push({id:'faqSix', question: 'Do you have a minimum order?', answer: 'For customers within the Styles Farmhouse delivery area our minimum order is £50 including VAT, however, if we are in your area than we are more than happy to drop an order in, please call to find out our delivery days for your area.'});
		faqs.push({id:'faqSeven', question: 'Why should I choose Styles?', answer: 'Our staff and customers are extremely important to us and we work hard to ensure we have a happy environment. We pride ourselves on ensuring that we provide the best service, making the best luxury farmhouse ice cream, and using the best locally sourced ingredients where possible. Being a family run farm we try hard to make sure that we are there to support our customers when needed and we like to make the process as straight forward as possible. We also offer other products including the full range of cones, tubs, spoons and all popular ice lollies from Walls, Franco’s and Treats to make the ordering process an easy one.  '});
		faqs.push({id:'faqEight', question: 'Is my event too big/small for Styles Farmhouse Ice Cream?', answer: 'Here at Styles we firmly believe that no event is too big or too small. Throughout the year we are involved with in excess of 200 shows. These shows range from a village fete or country fair to large scale agricultural shows, steam fairs and music festivals, so please do not hesitate to get in touch if you are questioning whether Styles is right for you!'});
	model.faqs = faqs;	

	model.team = [];
		model.team.push({src:'images/team/david.jpg',  name:'David Baker', job: 'MD', blurb: 'Founder of Styles Ice-Cream'});
		model.team.push({src:'images/team/james_baker.jpg',  name:'James Baker', job:'Sales', blurb:'Does something with sales'});
		model.team.push({src:'images/team/james_miles.jpg', name:'James Miles', job:'Retail', blurb:'Alot to do with retail'});
		model.team.push({src:'images/team/david.jpg',  name:'David Baker', job: 'MD', blurb: 'Founder of Styles Ice-Cream'});
		model.team.push({src:'images/team/james_baker.jpg',  name:'James Baker', job:'Sales', blurb:'Does something with sales'});
		model.team.push({src:'images/team/james_miles.jpg', name:'James Miles', job:'Retail', blurb:'Alot to do with retail'});
  });
  
  
  
jQuery('body').bind('click', function(e) {
    
    if(jQuery(e.target).closest('.navbar').length == 0) {
        // click happened outside of .navbar, so hide
        var opened = $("#navbar").hasClass('collapse in');
      
      if ( opened === true ) {
		$("#navbar").collapse('hide');

	}
    }
});
