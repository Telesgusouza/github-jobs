import * as Styled from "./style";

import planetImg from "../../assets/planet.svg";

import imgJob from "../../assets/backgroundImg.png";
import imgClock from "../../assets/clock.svg";
import { useEffect } from "react";
import axios from "axios";

export default function WorkList() {
  useEffect(() => {
    async function getResp() {
      //   await axios
      //     .get(
      //       "https://serpapi.com/search.json?engine=google_jobs&q=Barista&location=Brazil&google_domain=google.com.br&gl=br&hl=pt&start=0&lrad=50&ltype=1&api_key=<YOUR_API_KEY>", // ?engine=google_jobs&q=Barista&location=Brazil&google_domain=google.com.br&gl=br&hl=pt&start=0&lrad=50&ltype=1&api_key=cf03964250cda156ff97e1972a21a933a2d2e684a127724208056199ed91222e
      //       {
      //         headers: {
      //           api_key:
      //             "cf03964250cda156ff97e1972a21a933a2d2e684a127724208056199ed91222e",
      //         },
      //         params: {
      //           api_key:
      //             "cf03964250cda156ff97e1972a21a933a2d2e684a127724208056199ed91222e",
      //           engine: "google_jobs",
      //           google_domain: "google.com.br",
      //           q: "Barista",
      //           hl: "pt",
      //           gl: "br",
      //           location: "Brazil",
      //           start: "0",
      //           lrad: "50",
      //           ltype: "1",
      //         },
      //       }
      //     )
      //     .then((resp) => console.log(resp));

      const params = {
        api_key:
          "cf03964250cda156ff97e1972a21a933a2d2e684a127724208056199ed91222e",
        engine: "google_jobs",
        google_domain: "google.com.br",
        q: "Barista",
        hl: "pt",
        gl: "br",
        location: "Brazil",
        start: "0",
        lrad: "50",
        ltype: "1",
      };
      await axios
        .get( "https://serpapi.com/search.json?engine=google_jobs&q=Barista&location=Brazil&google_domain=google.com.br&gl=br&hl=pt&start=0&api_key=<API_KEY>",
         
          {
            headers: {
              Accept: "application/json",
              api_key: "",
            },
            params: {
              engine: "google_jobs",
              location: "Brazil",
              google_domain: "google.com.br",
              q: "Barista",
              hl: "pt",
              gl: "br",
              start: "0",
              lrad: "50",
              ltype: "1",
            },
          }
        )
        .then((resp) => console.log(resp))
        .catch((err) => console.error("[ERROR] >>>>>  ", err));
    }

    getResp();
  }, []);

  return (
    <Styled.Container>
      <ul>
        <Styled.Job>
          <img src={imgJob} alt="logo da empresa" />
          <Styled.JobContent>
            <div>
              <p>Kasisto</p>
              <h2>Front-end Software Enginer</h2>
              <div>Tempo integral</div>
            </div>

            <Styled.InfoJob>
              <div>
                <img src={planetImg} alt="icone de terra" /> Novo serviço
              </div>
              <div>
                <img src={imgClock} alt="icone de relógio" /> 5 dias ago
              </div>
            </Styled.InfoJob>
          </Styled.JobContent>
        </Styled.Job>
      </ul>
    </Styled.Container>
  );
}
