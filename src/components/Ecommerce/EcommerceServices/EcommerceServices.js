import style from "./EcommerceServices.module.scss";

function EcommerceServices({ apiData }) {
  // const [contacts] = useState([
  //   {
  //     number: "1.",
  //     title: "Iphone App",
  //     info: "Development",
  //   },
  //   {
  //     number: "2.",
  //     title: "Android App",
  //     info: "Development",
  //   },
  //   {
  //     number: "3.",
  //     title: "Wearable App",
  //     info: "Development",
  //   },
  //   {
  //     number: "4.",
  //     title: "IPad App",
  //     info: "Development",
  //   },
  //   {
  //     number: "5.",
  //     title: "Cross ",
  //     info: "Platform",
  //   },
  //   {
  //     number: "6.",
  //     title: "Progressiveweb App",
  //     info: "Development",
  //   },
  // ]);
  return (
    <div className={style.solve}>
      {/* ///////////////////////////////////// */}
      {/* short desc */}
      {/* ///////////////////////////////////// */}
      <div className={style.solve__identity}>
        <div className={style.head}>
          <p>{apiData.EcommerceSolutionSection.Title1}</p>
          <h2>
            <div>{apiData.EcommerceSolutionSection.Title2}</div>
            <div>{apiData.EcommerceSolutionSection.Title3}</div>
            <div className={style.headMobile}>
              {apiData.EcommerceSolutionSection.Title2}{" "}
              {apiData.EcommerceSolutionSection.Title2}{" "}
              {apiData.EcommerceSolutionSection.Title3}
            </div>
          </h2>
        </div>
        <div className={style.text}>
          <p>{apiData.EcommerceSolutionSection.Paragraph}</p>
          <p>
            As a prominent name in the IT industry worldwide, we provide high-quality e-commerce services promptly to help our clients gain a competitive edge in the market.
          </p>
          <p>
            We are your one-stop solution provider for comprehensive e-commerce development services. Leading businesses hire our developers to successfully drive and achieve their critical e-commerce projects. As a leading e-commerce development company with a skilled team, we build custom e-commerce solutions featuring the most interactive and modern interfaces.
          </p>

        </div>
      </div>

      {/* ///////////////////////////////////// */}
      {/* solutions */}
      {/* ///////////////////////////////////// */}
      {/* <div className={style.maingridstl}>
        <Grid
          className={style.gridmain}
          container
          spacing={2}
          justifyContent={"center"}
        >
          {contacts.map((contact, index) => (
            <Grid item sm={2} xs={12} key={index}>
              <Card className={style.card}>
                <div className={style.number}>{contact.number}</div>
                <div>
                  <span className={style.span}>{contact.title}</span>
                </div>
                <div className={style.span}>{contact.info}</div>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className={style.mbsrbtn}>
          <button>Inquire now <span>
          <BsChevronRight />
        </span></button>
        </div>
      </div> */}
    </div>
  );
}

export default EcommerceServices
