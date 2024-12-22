import React from "react";
import { Check, Star, Zap, Crown } from "lucide-react";
import logo from '../assets/logo.png'

const Pricing = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto pt-8 pb-16 text-center">
        <div className="flex items-center justify-center mb-8 gap-3">
          <img src={logo} alt="Alpha" />
          <span className="text-white text-4xl font-bold">Alpha</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h1>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto">
          Unlock the full potential of Alpha with our premium features. Select
          the plan that best fits your needs.
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {/* Free Plan */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/10 shadow-xl relative">
          <div className="absolute -top-3 -right-3">
            <Star className="w-8 h-8 text-purple-300" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold text-white">$0</span>
            <span className="text-purple-200">/month</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Basic access to Alpha</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">100 queries per day</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Standard response time</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Community support</span>
            </div>
          </div>
          <button className="w-full mt-8 bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 px-4 transition-all">
            Current Plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-purple-400/30 shadow-xl relative transform hover:scale-105 transition-all">
          <div className="absolute -top-3 -right-3">
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-purple-400 text-black px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold text-white">$19</span>
            <span className="text-purple-200">/month</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Everything in Free</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Unlimited queries</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Priority response time</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Advanced features access</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Email support</span>
            </div>
          </div>
          <button className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 px-4 transition-all shadow-lg hover:shadow-purple-500/20">
            Upgrade to Pro
          </button>
          
          
        </div>

        {/* Premium Plan */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/10 shadow-xl relative transform hover:scale-105 transition-all ">
          <div className="absolute -top-3 -right-3">
            <Crown className="w-8 h-8 text-yellow-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold text-white">$49</span>
            <span className="text-purple-200">/month</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Everything in Pro</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Custom API access</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Dedicated support team</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Custom integrations</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-green-400 w-5 h-5" />
              <span className="text-purple-100">Advanced analytics</span>
            </div>
          </div>
          <button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl py-3 px-4 transition-all">
            Upgrade to Premium
          </button>
        </div>
      </div>

      {/* FAQ or Additional Info */}
      <div className="max-w-2xl mx-auto mt-16 text-center">
        <p className="text-purple-200 text-sm ">
          All plans include our core features. Upgrade or downgrade at any time.
          Need a custom plan?
          <button className="text-white hover:text-purple-300 font-medium ml-2">
            Contact us
          </button>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
