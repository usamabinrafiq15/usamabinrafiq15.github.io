import React from "react";
import "./HeroSection.scss";
import { Container } from "react-bootstrap";
import GridLayout from "../../Layouts/GridLayout";
import FloatingMenu from "../../components/FloatingMenu";

const HeroSection = () => {
  return (
    <GridLayout squarePosition="square-position-1">
      <Container>
        <div className=" d-flex justify-content-center hero-wrapper">
          <div>
            <div className=" hero-wrapper-responsive">
              <div className=" d-flex flex-column align-items-center hero-text">
                <div className="d-block">Darwin</div>
                <div className="d-block">(Bio + AI)</div>
              </div>
              <div className="d-flex justify-content-center">
                <p
                  className=" mt-md-5 pt-5  text-center sub-text "
                  style={{ maxWidth: "1100px" }}
                >
                  The Onco Semantics R&D Lab on a mission to decode Cancer’s
                  language and enable Humans to develop High- precision Drugs!
                </p>
              </div>
            </div>

            <p className="  sub-content-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
            <p className="  sub-content-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
            <p className="  sub-content-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
            <p>
              <b className="sub-content-text pe-2">Privacy Notice:</b>{" "}
              <span className="sub-content-text">
                We prioritise user privacy and anonymity. Therefore, our digital
                assets do not utilise cookies or user behaviour tracking tools.
              </span>
            </p>
            <FloatingMenu />
          </div>
        </div>
      </Container>
    </GridLayout>
  );
};

export default HeroSection;