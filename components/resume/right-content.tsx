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
              Full-stack engineer contributing to the development and support of B2B and B2C identity products for Dow
              Jones.
            </p>
            <ul className="ml-4 list-inside list-disc">
              <li>
                Currently leading the frontend team, responsible for driving UI/UX decisions, conducting code reviews,
                writing technical documentation, and mentoring teammates to ensure code quality and consistency.
              </li>
              <li>
                Refactored two legacy jQuery projects to modern stacks (React, TypeScript, Tailwind), significantly
                improving performance and accessibility (a11y).
              </li>
              <li>Built an internal application from scratch to manage business data, using Next.js and Tailwind.</li>
              <li>
                Actively migrating the backend from Express.js to TypeScript with Nest.js, while improving unit test
                coverage using Jest.
              </li>
            </ul>
          </div>

          <div>
            <p>
              2019 - 2021 · <span className="font-semibold">HCL Technologies</span>
            </p>
            <h5 className="text-sm font-semibold tracking-tight sm:text-base">Software Engineer</h5>
            <p className="mb-2">Frontend engineer for an internal web-based content management tool.</p>
            <ul className="ml-4 list-inside list-disc">
              <li>Initially worked with Dojo Toolkit to develop a drag-and-drop email template builder.</li>
              <li>
                Later led the migration of the entire application to React, Redux, and Material UI (MUI), significantly
                boosting performance and accessibility.
              </li>
            </ul>
          </div>

          <div>
            <p>
              2017 - 2019 · <span className="font-semibold">Advanced Methods Co. (Amco)</span>
            </p>
            <h5 className="text-sm font-semibold tracking-tight sm:text-base">Software Engineer</h5>
            <p className="mb-2">
              Frontend-focused engineer supporting a payments portal and inventory system, with occasional backend work
              using Ruby on Rails.
            </p>
            <ul className="ml-4 list-inside list-disc">
              <li>Developed features for an invoicing and payment platform (cash/card), using jQuery and Sass.</li>
              <li>
                Refactored legacy code and redesigned UI elements to improve UX and system maintainability using Haml
                and Sass.
              </li>
            </ul>
          </div>

          <div>
            <p>
              2014 - 2017 · <span className="font-semibold">TATA Consultancy Services</span>
            </p>
            <h5 className="text-sm font-semibold tracking-tight sm:text-base">Software Engineer</h5>
            <p className="mb-2">Frontend engineer supporting internal tools for Morgan Stanley. </p>
            <ul className="ml-4 list-inside list-disc">
              <li>
                Part of the Credit Risk team, responsible for developing and maintaining tools related to user data
                validation, money management, and loan processing.
              </li>
              <li>Used Ext JS to implement new features and resolve bugs.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
