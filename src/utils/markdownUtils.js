// This is a client-side implementation of the markdown utils
// It uses a mock approach since we can't use Node.js fs module in the browser

// Mock data for blog posts
const blogPosts = [
  {
    slug: '10-essential-leadership-skills',
    title: '10 Essential Leadership Skills for the Modern Workplace',
    excerpt: 'Discover the critical leadership competencies that separate great leaders from good ones in today's rapidly evolving business landscape.',
    author: 'Sarah Mitchell',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'leadership',
    tags: ['Leadership', 'Management', 'Skills'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    content: `
Leadership in today's rapidly evolving workplace requires a unique blend of traditional management skills and modern competencies. As organizations become more distributed, diverse, and digital, leaders must adapt their approach to remain effective.

## 1. Emotional Intelligence

The ability to understand and manage your own emotions while effectively reading and responding to others' emotions is fundamental to modern leadership. Leaders with high emotional intelligence create psychologically safe environments where team members feel valued and heard.

## 2. Digital Fluency

Today's leaders must be comfortable with technology and understand how digital tools can enhance productivity and collaboration. This doesn't mean being a technical expert, but rather understanding the strategic implications of digital transformation.

## 3. Adaptability

In a world of constant change, adaptable leaders thrive while rigid ones struggle. Developing comfort with ambiguity and the ability to pivot strategies quickly is essential.

## 4. Inclusive Leadership

Modern workplaces are increasingly diverse. Leaders must create environments where people of all backgrounds feel welcome, valued, and empowered to contribute their unique perspectives.

## 5. Strategic Thinking

Seeing the big picture while connecting it to daily operations is crucial. Strategic leaders anticipate market shifts and position their teams to capitalize on emerging opportunities.

## 6. Communication Excellence

Clear, transparent communication builds trust and alignment. This includes active listening, thoughtful questioning, and the ability to articulate complex ideas simply.

## 7. Coaching Mindset

Great leaders develop others. Adopting a coaching approach helps team members grow their capabilities while increasing engagement and performance.

## 8. Decision-Making

Making timely, well-informed decisions—even with incomplete information—separates effective leaders from those paralyzed by analysis.

## 9. Change Management

Leading teams through transitions requires understanding the human side of change, addressing resistance, and creating compelling visions of the future.

## 10. Self-Awareness

Perhaps most important is knowing yourself—your strengths, weaknesses, biases, and triggers. Self-aware leaders continually seek feedback and invest in their own development.

Developing these ten competencies doesn't happen overnight, but intentional practice and reflection can accelerate your growth as a leader. Which of these skills will you focus on developing first?
    `
  },
  {
    slug: 'building-high-performance-teams',
    title: 'Building High-Performance Teams in Remote Environments',
    excerpt: 'Learn proven strategies for creating and managing high-performing remote teams in today's digital workplace.',
    author: 'Michael Chen',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    publishDate: '2024-01-12',
    readTime: '6 min read',
    category: 'leadership',
    tags: ['Team Management', 'Remote Work', 'Leadership'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: `
Building and managing high-performance teams in remote environments presents unique challenges and opportunities. Here's how to create a successful remote team culture:

## Establish Clear Expectations

Remote work thrives on clarity. Set explicit expectations around:

- Working hours and availability
- Communication channels and response times
- Meeting protocols and attendance
- Deliverables and deadlines
- Performance metrics

Document these expectations and revisit them regularly as team needs evolve.

## Invest in the Right Tools

Your tech stack can make or break remote collaboration. Essential tools include:

- Video conferencing (Zoom, Microsoft Teams)
- Asynchronous communication (Slack, Microsoft Teams)
- Project management (Asana, Trello, Monday)
- Document collaboration (Google Workspace, Microsoft 365)
- Virtual whiteboards (Miro, Mural)

Choose tools that integrate well and provide a seamless experience.

## Build Trust Intentionally

Trust doesn't happen by accident in remote environments. Build it through:

- Consistent follow-through on commitments
- Transparent decision-making processes
- Regular one-on-one check-ins
- Giving team members autonomy
- Creating psychological safety

Remember that trust is built in small moments over time.

## Facilitate Effective Communication

Communication needs extra attention in remote settings:

- Set clear communication norms
- Use video when possible to capture non-verbal cues
- Document key decisions and action items
- Create channels for both work-related and social conversation
- Address issues promptly before they escalate

Overcommunication is better than undercommunication when teams are distributed.

## Foster Connection and Belonging

Combat isolation by creating opportunities for connection:

- Virtual coffee chats or team lunches
- Online team-building activities
- Recognition of personal and professional milestones
- Sharing of personal updates and interests
- Occasional in-person gatherings when possible

These moments of connection build the relationships that fuel collaboration.

## Measure Outcomes, Not Activity

Focus performance management on results rather than hours logged:

- Set clear, measurable objectives
- Establish key results that indicate success
- Conduct regular progress reviews
- Provide specific, timely feedback
- Celebrate achievements visibly

Trust your team members to manage their time effectively.

## Develop Remote Leadership Skills

Leading remote teams requires specific capabilities:

- Proactive communication
- Digital emotional intelligence
- Virtual coaching and mentoring
- Remote conflict resolution
- Distributed decision-making

Invest in developing these skills in yourself and your team leaders.

By implementing these strategies, you can build remote teams that not only perform well but thrive in the digital environment. The future belongs to organizations that master the art of remote collaboration.
    `
  },
  {
    slug: 'productivity-science',
    title: 'The Science of Productivity - Evidence-Based Strategies',
    excerpt: 'Explore scientifically-proven methods to boost your productivity and achieve more meaningful results in less time.',
    author: 'Emily Rodriguez',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    publishDate: '2024-01-10',
    readTime: '7 min read',
    category: 'productivity',
    tags: ['Productivity', 'Science', 'Time Management'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    content: `
Understanding the science behind productivity can help us work smarter, not harder. Let's explore evidence-based strategies that have been proven to enhance performance:

## The Myth of Multitasking

Despite popular belief, multitasking significantly reduces productivity. Research from Stanford University shows that people who multitask regularly:

- Take longer to complete tasks
- Make more errors
- Have trouble filtering out irrelevant information
- Experience greater stress

**Evidence-based strategy:** Focus on one task at a time, giving it your full attention before moving to the next item. This "single-tasking" approach can increase productivity by up to 40%.

## Optimize Your Work Environment

Your physical environment profoundly impacts your cognitive function. Studies show:

- Natural light increases productivity by 15%
- Plants in workspaces improve concentration by 15%
- Ambient noise at around 70 decibels enhances creative thinking
- Temperatures between 70-72°F (21-22°C) optimize performance

**Evidence-based strategy:** Design your workspace to minimize distractions and incorporate elements that enhance focus and creativity for your specific work style.

## Work With Your Biological Rhythms

We all have natural peaks and valleys in our energy and focus throughout the day. Research shows:

- Most people have peak analytical abilities in the morning
- Creative thinking often improves in the afternoon
- Decision fatigue accumulates throughout the day

**Evidence-based strategy:** Schedule your most demanding cognitive tasks during your personal peak performance window. Save routine tasks for energy valleys.

## The Power of Strategic Breaks

Contrary to hustle culture messaging, breaks enhance productivity rather than hindering it:

- The Pomodoro Technique (25 minutes of work followed by 5-minute breaks) has been shown to improve focus
- Brief nature exposure (even looking at nature images) restores attention
- Brief physical activity boosts cognitive function for up to 2 hours

**Evidence-based strategy:** Take regular, intentional breaks before fatigue sets in. A good rule is a 5-minute break every hour, with longer breaks every 90 minutes.

## Sleep: The Ultimate Productivity Hack

Sleep might be the most underrated productivity enhancer:

- Just one night of poor sleep reduces cognitive performance by 20-30%
- Chronic sleep deprivation correlates with a 13% increased risk of mortality
- Even a 26-minute nap can boost performance by 34%

**Evidence-based strategy:** Prioritize 7-9 hours of quality sleep and consider power naps (10-20 minutes) when afternoon energy dips occur.

## Implementation Intentions

Vague goals rarely translate to action. Research by psychologist Peter Gollwitzer shows that implementation intentions—specific if-then plans—increase goal achievement by 200-300%.

**Evidence-based strategy:** Transform goals into specific plans using the format: "When situation X occurs, I will perform response Y." For example: "When I arrive at my desk at 9am, I will work on my most important project for 90 minutes before checking email."

## The Two-Minute Rule

Small tasks that take less than two minutes often consume more mental energy when postponed than when handled immediately.

**Evidence-based strategy:** If a task will take less than two minutes, do it immediately. This prevents small tasks from accumulating and creating cognitive load.

By applying these evidence-based strategies, you can work with your biology rather than against it, achieving more meaningful results while maintaining wellbeing. True productivity isn't about doing more—it's about achieving your most important goals with less stress and greater satisfaction.
    `
  }
];

// Function to get all blog posts
export function getAllPosts() {
  return blogPosts;
}

// Function to get a specific post by slug
export function getPostBySlug(slug) {
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    throw new Error(`Post with slug "${slug}" not found.`);
  }
  
  // Convert markdown content to HTML (using a simple implementation)
  // In a real app, you'd use a library like marked
  const contentHtml = simpleMarkdownToHtml(post.content);
  
  return {
    ...post,
    contentHtml
  };
}

// Simple function to convert markdown to HTML
// This is a very basic implementation - in a real app, use a proper markdown parser
function simpleMarkdownToHtml(markdown) {
  if (!markdown) return '';
  
  // Convert headers
  let html = markdown
    .replace(/## (.*)/g, '<h2>$1</h2>')
    .replace(/# (.*)/g, '<h1>$1</h1>')
    .replace(/### (.*)/g, '<h3>$1</h3>');
  
  // Convert paragraphs (simplified)
  html = html
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.trim().startsWith('<h')) return paragraph;
      if (paragraph.trim() === '') return '';
      return `<p>${paragraph.trim()}</p>`;
    })
    .join('');
  
  // Convert bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Convert italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  return html;
}