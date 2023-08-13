import React from "react";
import Container from "~/app/_components/Container";
import HeaderSpace from "~/app/_components/HeaderSpace";
import { AddOnProvider, VariantProvider } from "./contexts";
import ProductInfo from "./ProductInfo";
import Images from "./Images";
import Accordion from "~/app/_components/Accardion";

const Page: React.FC = () => {
  return (
    <VariantProvider>
      <AddOnProvider>
        <div>
          <HeaderSpace />

          <Container innerClassName="grid grid-cols-1 lg:grid-cols-[390px_1fr] lg:grid-rows-[fit-content(300px)_1fr] auto-rows-auto gap-6">
            <div className="flex h-max flex-col gap-4">
              <ProductInfo />

              <Accordion label="Add-ons">
                Wenn du weitere Foodschalen benötigst, kannst du diese als
                Add-on in 2er- oder 4er-Sets bestellen. Jede zusätzliche
                Foodschale hat einen eigenen Deckel, der dir eine einfache
                Aufbewahrung deiner Mahlzeit im Kühlschrank ermöglicht.
              </Accordion>

              <Accordion label="Beschreibung">
                Steasy ist ein mobiler Mini-Steamer mit eingebautem Akku. Damit
                kannst du deinen vorgekochten Lunch überall qualitativ
                hochwertig aufwärmen. Steasy bietet Platz für Gerichte bis knapp
                450 g. Das Steamen dauert bloss 15 min und du kannst deinen
                Lunch gleich heiss und direkt aus der Edelstahl-Foodschale
                geniessen. Dazu kannst du Steasy einfach via App bedienen und
                kannst deine Essenszeit sogar im Voraus timen. Dank des
                innovativen Verschluss-Systems ist Steasy nicht nur
                auslaufsicher zu transportieren, sondern auch geruchsfrei beim
                Steamen.
              </Accordion>

              <Accordion label="Spezifikationen">
                Höhe: 80.4 mm
                <br />
                Breite: 176 mm
                <br />
                Länge: 234 mm
                <br />
                Gewicht: 1300 g
                <br />
                Volumen Foodschale: 940 ml
              </Accordion>

              <Accordion label="Lieferumfang">
                1x Steasy
                <br />
                1x Edelstahl-Foodschale
                <br />
                1x Ladekabel
                <br />
                App inklusive
              </Accordion>
            </div>

            <Images />
          </Container>
        </div>
      </AddOnProvider>
    </VariantProvider>
  );
};

export default Page;
