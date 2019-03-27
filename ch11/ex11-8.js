export const Events = () =>
  <PageTemplate>
    <section className="events">
      <h1>[이벤트]</h1>
    </section>
  </PageTemplate>
  
export const Products = () =>
  <section className="products">
    <h1>[제품]</h1>
  </section>

export const Contact = () =>
  <PageTemplate>
    <section className="contact">
      <h1>[고객 지원]</h1>
    </section>
  </PageTemplate>

export const About = ({ match }) =>
  <PageTemplate>
    <section className="about">
      <h1>[회사 소개]</h1>
    </section>
  </PageTemplate>
