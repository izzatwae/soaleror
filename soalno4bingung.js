const buat_data =  () => {
    fetch("https://api.kawalcorona.com/")
    .then((res) => res.json())
    .then((res) => {
        console.log(
            data.map((value, index) => {
                console.log(
                    `$(index + 1). ${value.title} dan complate ${value.completed}`
                );
            })
        );
    })
    .catch((err) => console.log(err));
}
buat_data();