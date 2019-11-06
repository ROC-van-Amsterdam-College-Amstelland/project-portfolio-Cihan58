function getMyDatum() {
    vandaag = new Date();
    dag = vandaag.getDate();
    maand = vandaag.getMonth() + 1;
    jaar = vandaag.getYear();
    return dag + "-" + maand + "-" + jaar;
}



