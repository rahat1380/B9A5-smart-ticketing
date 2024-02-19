function scrollToMainSection(){
    const mainSection = document.getElementById('mainId');

        // Scroll options
        const scrollOptions = {
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        };

        // Scroll to the main section
        mainSection.scrollIntoView(scrollOptions);
}

// For counting the seats 

const allSeats = document.getElementsByClassName("addSeats");
let count=0;
let leftSeat=40;


for (const seat of allSeats){
    seat.addEventListener("click",function(e){
        seat.classList.add('bg-lime-500','text-white');
        const seatData =seat.innerText;
        count=count+1;
        leftSeat=leftSeat-1;
        setInnerTextById("seatCount",count);
        setInnerTextById("leftSeatCount",leftSeat);
        const priceTotal= 550*count;
        setInnerTextById("total",priceTotal);
        setInnerTextById("grandTotal",priceTotal);


        // Coupon functionality 
        const coupon=document.getElementById("coupon");
        handleSeatClick(seatData);
        if(count>=4){
            alert("You have reached the limit!");
            disableSeats(seat);
            coupon.removeAttribute("disabled");
            const discountTr=document.getElementById("discountTr");
            const applyBtn= document.getElementById("applyBtn");
            applyBtn.addEventListener("click",function(e){
                const couponValue=coupon.value;
                if (couponValue== 'NEW15'){
                    const discount15= 2200*0.15;
                    setInnerTextById("discount",discount15);
                    const finalPrice= 2200-discount15;
                    setInnerTextById("grandTotal",finalPrice);
                    coupon.classList.add("hidden");
                    applyBtn.classList.add("hidden");
                    discountTr.classList.remove("hidden");
                }
                else if(couponValue == 'Couple 20'){
                    const discount20= 2200*0.20;
                    setInnerTextById("discount",discount20);
                    const finalPrice= 2200-discount20;
                    setInnerTextById("grandTotal",finalPrice);
                    coupon.classList.add("hidden");
                    applyBtn.classList.add("hidden");
                    discountTr.classList.remove("hidden");
                }
                else{
                    alert('Wrong Coupon! Use a valid one.');
                }
            })
        }

    })
}

// next button functionality 

const phoneNumberInput = document.getElementById("number");
const nextButton = document.getElementById("nextBtn");

phoneNumberInput.addEventListener("input", function (e) {
    const phoneNumberValue = phoneNumberInput.value.trim();

    
    if (phoneNumberValue !== "" && count>0) {
        nextButton.removeAttribute("disabled");
    } else {
        nextButton.setAttribute("disabled", "disabled");
    }
});

function disableSeats(){
    for (const seat of allSeats) {
        seat.setAttribute('disabled', 'disabled');
}
}

