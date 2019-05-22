function count()
		{
			var pt_now = parseFloat(document.getElementById("pt_now").value);
			
			var pt_min = parseFloat(document.getElementById("pt_min").value);

			var days = parseInt(document.getElementById("days").value);

			var x = parseFloat(0);

			
			if (days == 1) x = 1;

			else if (days == 2) x = 1.85;

			else  x = 1.85 + 0.925*(days - 2);



			document.getElementById("result").innerHTML = (pt_now - ((pt_now - pt_min)/0.25*0.01) * x).toFixed(2);
		}