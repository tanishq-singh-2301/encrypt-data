const shifting = (data: string, shifting: number): string => {
    let newStr: string = "";

    for (var i = 0; i < data.length; i++) {
        const charCode: number = data.charCodeAt(i);

        newStr += String.fromCharCode((charCode));
    }

    // console.log(newStr);
    // console.log(data);

    return data;
}

export default shifting