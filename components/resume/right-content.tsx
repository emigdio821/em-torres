export function RightContent() {
  return (
    <section className="flex flex-col gap-6 p-4">
      <div className="flex flex-col">
        <h5 className="text-sm font-semibold tracking-tight sm:text-base">Experience</h5>
        <div className="flex flex-col gap-4">
          <div>
            <p>
              2021 - Present · <span className="font-semibold">Wizeline</span>
            </p>
            <h5 className="text-sm font-semibold tracking-tight sm:text-base">Senior Software Engineer</h5>
            <p className="mb-2">
              Working as a full-stack engineer, development and support for the B2B and B2C identity products from the
              Dow Jones company.
            </p>
            <ul className="ml-4 list-inside list-disc">
              <li>
                Updated UI and refactored two jQuery legacy projects to React, TypeScript and Tailwind, increasing
                performance and application a11y.
              </li>
              <li>
                Created internal application from scratch to manage some internal data, using Next.js, and Tailwind.
              </li>
              <li>
                Currently we are migrating our backend from Express.js to TypeScript using Nest.js framework and
                improving our unit testing using Jest.
              </li>
            </ul>
          </div>

          <div>
            <p>
              2019 - 2021 · <span className="font-semibold">HCL Technologies</span>
            </p>
            <h5 className="text-sm font-semibold tracking-tight sm:text-base">Software Engineer</h5>
            <p className="mb-2">Worked as a frontend engineer, development and support for an internal tool.</p>
            <ul className="ml-4 list-inside list-disc">
              <li>
                I worked in this internal tool similar to a web content manager, the user was able to drag and drop some
                components to create email templates effortless, using a JavaScript library called Dojo Toolkit.
              </li>
              <li>
                After some time, I helped to migrate the whole application to React, Material UI (MUI), and Redux to
                increase the application performance and a11y.
              </li>
            </ul>
          </div>

          <div>
            <p>
              2017 - 2019 · <span className="font-semibold">Advanced Methods Co. (Amco)</span>
            </p>
            <h5 className="text-sm font-semibold tracking-tight sm:text-base">Software Engineer</h5>
            <p className="mb-2">
              Worked mainly as a frontend engineer, development and support of a payments portal, and an inventory
              system. Sometimes I worked in the backend using Ruby on Rails.
            </p>
            <ul className="ml-4 list-inside list-disc">
              <li>
                I worked in this payments portal, it was able to generate invoices, perform payments with cash and
                cards, using jQuery, and Sass.
              </li>
              <li>
                I contributed in the inventory system refactoring existing code, updated some legacy UI to have a better
                UX, improved the invoice generation, etc. It was a pretty huge project. I was using Ruby on Rails and
                its own template system using Haml and Sass.
              </li>
            </ul>
          </div>

          <div>
            <p>
              2014 - 2017 · <span className="font-semibold">TATA Consultancy Services</span>
            </p>
            <h5 className="text-sm font-semibold tracking-tight sm:text-base">Software Engineer</h5>
            <p className="mb-2">
              Worked as a frontend engineer, development and support for Morgan Stanley bank internal tools.
            </p>
            <ul className="ml-4 list-inside list-disc">
              <li>
                I contributed in fixing existing bugs as well as implementing new features, I was part of the Credit
                Risk team, we managed internal tools to validate user data, money management, loans, etc. I was using a
                JavaScript framework called Ext JS.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
