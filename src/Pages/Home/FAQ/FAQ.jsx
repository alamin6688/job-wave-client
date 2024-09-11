const FAQ = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-4 mb-8 pb-6 px-4">
      <div className="px-2 text-center">
        <h1 className="text-4xl pt-8 pb-8 font-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="collapse bg-base-100">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-bold">
          How do I create an account?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            You can create an account by clicking the &quot;Sign In&quot; button
            at the top right of the page. It will redirect you into a Sign In
            page. Then go to Sign Up page by clicking &quot;Or Sign Up.&quot;
            Fill out your name, email, password, and profile photo. After
            submission, you will be able to access the platform and start
            posting or bidding on jobs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          How does the bidding process work?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            Once you find a job you&apos;re interested in, you can click on the
            &quot;Place Bid&quot; button on the job details page. Submit your
            bid amount and deadline. The job owner will review your bid and
            either accept or reject it. You can view your bids on the &quot;My
            Bids&quot; page.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          How do I post a job?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            To post a job, go to the &quot;Add Job&quot; page after logging in.
            Fill in the required details such as job title, category, deadline,
            description and price range. Once submitted, the job will be listed
            under the relevant category and freelancers can start bidding on it.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          Can I update or delete my posted jobs?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            Yes, you can update or delete any job you have posted. Navigate to
            the &quot;My Posted Jobs&quot; page, where you will see a list of
            your jobs with options to edit or remove them. You cannot update or
            delete jobs posted by others.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          How do I know if my bid is accepted?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            You can check the status of your bids on the &quot;My Bids&quot;
            page. If your bid is accepted, the status will be updated to
            &quot;In Progress.&quot; If it is rejected, the status will be
            marked as &quot;Rejected.&quot; You will also be able to mark a job
            as complete once the work is finished.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
