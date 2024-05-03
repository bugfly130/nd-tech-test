export default function Home() {
  return (
    <div className="flex flex-row bg-[#009688] rounded-lg shadow-md max-w-screen-md mx-auto p-6">
      <div className="flex flex-col items-center mb-8">
        <div className="overflow-hidden mr-4 border-4 border-white w-44 h-44 rounded-full bg-gray-300">
          <img className="w-full h-full object-cover" src="/employee1.svg" alt="employee" />
        </div>
        <div className="flex-grow flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-slate-50">Nebojsa Djokic</h1>
          <p className="text-white">Email: nebojsadj86@gmail.com</p>
          <p className="text-white">Type: Regular User</p>
          <p className="text-white">Membership Status: Free</p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Engagement</h2>
          <div className="flex items-center mb-4">
            <img className="w-12 h-12 mr-3" src="/review-icon.svg" alt="Reviews Given" />
            <span className="text-white">Reviews Given</span>
          </div>
          <div className="flex items-center mb-4">
            <img className="w-12 h-12 mr-3" src="/bookmarked.svg" alt="Bookmarked Reviews" />
            <span className="text-white">Bookmarked Reviews</span>
          </div>
          <div className="flex items-center mb-4">
            <img className="w-12 h-12 mr-3" src="/messages.svg" alt="Messages" />
            <span className="bg-red-600 text-white rounded-full p-1 text-xs relative -left-5 bottom-5">20</span>
            <span className="text-white">Messages</span>
          </div>
          <div className="flex items-center mb-4">
            <img className="w-12 h-12 mr-3" src="/bell.svg" alt="Notifications" />
            <span className="bg-red-600 text-white rounded-full p-1 text-xs relative -left-5 bottom-5">3</span>
            <span className="text-white">Notifications</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="mb-8">
            <h2 className="section-title">Settings</h2>
            <button type="submit" className="submit-button">Send</button>
            <div className="settings-item">User Settings</div>
            <div className="settings-item">Search</div>
            <div className="settings-item">Explore</div>
            <div className="settings-item">Permissions / Privacy</div>
            <div className="settings-item">Subscriptions</div>
            <div className="settings-item">Billing</div>
          </div>

          <div className="mb-8">
            <h2 className="section-title">Account</h2>
            <div className="account-item">Switch Accounts</div>
            <div className="account-item">Ability to Change Password</div>
          </div>

          <div className="mb-8">
            <h2 className="section-title">Membership & Billing</h2>
            <div className="membership-billing-item">Enroll in Premium</div>
            <div className="membership-billing-item">Billing Info</div>
          </div>
        </div>

      </div>
    </div>
  );
}
