// Lecture: Hoisting 
$(function(){
	$("form").submit(function(event){
		event.preventDefault()
		var $form = $(this);
		var nameOfPerson = $form.find("input[name='Name']").val();
		var birthYearOfPerson = $form.find("input[name='Year']").val();

		function calculateAge(nameOfPerson, birthYearOfPerson) {	
			if (nameOfPerson.length > 0 && birthYearOfPerson > 1000 && birthYearOfPerson < 2018 && birthYearOfPerson != '') {
			var age = 2018 - birthYearOfPerson;
			return `${nameOfPerson} is going to be ${age} this year!`;
			} else if (birthYearOfPerson > 2018) {
				return 'dumb ass.... you are definitely not born in the future';
			} else if (birthYearOfPerson < 1000 && birthYearOfPerson != '') {
				return 'you are most likely to be dead by now';
			} else {
				return 'Uh you did not input the right info.... Please read the instructions and try again';
			}
		}

		$form.siblings("div").text(calculateAge(nameOfPerson, birthYearOfPerson));
	});
})


