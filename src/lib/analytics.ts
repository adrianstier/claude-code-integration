// Google Analytics 4 Event Tracking Utilities
// These functions provide type-safe event tracking for user interactions

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void
  }
}

// Check if analytics is available
const isAnalyticsAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

// Generic event tracking function
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
): void => {
  if (!isAnalyticsAvailable()) return
  window.gtag?.('event', eventName, params)
}

// Track page views (useful for SPA navigation)
export const trackPageView = (url: string, title?: string): void => {
  trackEvent('page_view', {
    page_location: url,
    page_title: title,
  })
}

// Track when users complete a learning module
export const trackModuleCompletion = (
  trackName: string,
  moduleName: string,
  moduleSlug: string
): void => {
  trackEvent('module_complete', {
    track_name: trackName,
    module_name: moduleName,
    module_slug: moduleSlug,
    event_category: 'learning',
  })
}

// Track when users start a learning track
export const trackTrackStart = (trackName: string): void => {
  trackEvent('track_start', {
    track_name: trackName,
    event_category: 'learning',
  })
}

// Track social shares
export const trackSocialShare = (
  platform: 'twitter' | 'linkedin' | 'reddit' | 'hackernews' | 'copy_link',
  contentTitle: string,
  contentUrl: string
): void => {
  trackEvent('share', {
    method: platform,
    content_type: 'article',
    item_id: contentUrl,
    content_title: contentTitle,
    event_category: 'engagement',
  })
}

// Track newsletter signups
export const trackNewsletterSignup = (location: string): void => {
  trackEvent('newsletter_signup', {
    signup_location: location,
    event_category: 'conversion',
  })
}

// Track search queries
export const trackSearch = (searchTerm: string, resultsCount: number): void => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
    event_category: 'engagement',
  })
}

// Track tool usage
export const trackToolUsage = (
  toolName: string,
  action: 'view' | 'copy' | 'download' | 'generate'
): void => {
  trackEvent('tool_usage', {
    tool_name: toolName,
    tool_action: action,
    event_category: 'tools',
  })
}

// Track code snippet copies
export const trackCodeCopy = (language: string, context: string): void => {
  trackEvent('code_copy', {
    code_language: language,
    copy_context: context,
    event_category: 'engagement',
  })
}

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string): void => {
  trackEvent('click', {
    link_url: url,
    link_text: linkText,
    link_type: 'external',
    event_category: 'outbound',
  })
}

// Track scroll depth milestones
export const trackScrollDepth = (
  depth: 25 | 50 | 75 | 100,
  pageUrl: string
): void => {
  trackEvent('scroll', {
    percent_scrolled: depth,
    page_location: pageUrl,
    event_category: 'engagement',
  })
}

// Track time on page milestones (in seconds)
export const trackTimeOnPage = (seconds: number, pageUrl: string): void => {
  trackEvent('time_on_page', {
    engagement_time_msec: seconds * 1000,
    page_location: pageUrl,
    event_category: 'engagement',
  })
}

// Track CTA clicks
export const trackCTAClick = (ctaName: string, ctaLocation: string): void => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
    event_category: 'conversion',
  })
}

// Track error events
export const trackError = (
  errorType: string,
  errorMessage: string,
  errorLocation?: string
): void => {
  trackEvent('error', {
    error_type: errorType,
    error_message: errorMessage,
    error_location: errorLocation,
    event_category: 'errors',
  })
}
