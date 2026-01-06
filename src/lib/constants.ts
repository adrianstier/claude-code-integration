export const SITE_NAME = 'Claude Code Learning'
export const SITE_DESCRIPTION =
  'Learn Claude Code, VS Code, Git/GitHub, Python, and R for real-world projects'

export const TRACKS = {
  START_HERE: 'start-here',
  DATA_ANALYSIS: 'data-analysis',
  APP_BUILDER: 'app-builder',
  AUTOMATION: 'automation',
  GIT_GITHUB: 'git-github',
} as const

export const PLATFORMS = {
  MAC: 'mac',
  WINDOWS: 'windows',
  BOTH: 'both',
} as const

export const EXAMPLE_PROMPTS = {
  SETUP: `I want to set up a new project with Claude Code.

Please help me:
1. Create a CLAUDE.md file with project context
2. Set up .claudeignore to manage context
3. Configure VS Code settings for Claude

The project is a [describe your project type].`,

  DATA_CLEANING: `I have a CSV file with [describe data].

The data has the following issues:
- [issue 1]
- [issue 2]

Please help me write a script to:
1. Load the data
2. Clean and transform it
3. Save the cleaned version

Use [Python/R] and explain each step.`,

  CODE_REVIEW: `Please review this code and suggest improvements:

\`\`\`python
[paste your code]
\`\`\`

Focus on:
- Performance
- Readability
- Best practices
- Potential bugs`,

  GIT_WORKFLOW: `I want to start using Git for this project.

Current status:
- [describe current state]

Please help me:
1. Initialize a Git repository
2. Create a .gitignore
3. Make my first commit
4. Push to GitHub`,

  CREATE_SKILL: `Create a custom Claude Code skill for [describe task].

The skill should:
- Be saved in .claude/commands/[skill-name].md
- Accept arguments via $ARGUMENTS placeholder
- Include clear step-by-step instructions
- Have safety checks for destructive actions

Example usage: /[skill-name] [example args]`,
} as const

export const LEARNING_PATHS = [
  {
    id: 'beginner',
    name: 'Complete Beginner',
    description: 'Never used VS Code, Git, or programming before',
    recommendedTrack: ['start-here', 'git-github', 'data-analysis'],
    duration: '8-12 hours',
  },
  {
    id: 'analyst',
    name: 'Aspiring Analyst',
    description: 'Some Excel experience, want to learn Python or R',
    recommendedTrack: ['start-here', 'data-analysis', 'automation'],
    duration: '6-10 hours',
  },
  {
    id: 'developer',
    name: 'Junior Developer',
    description: 'Some coding experience, want to build apps',
    recommendedTrack: ['start-here', 'app-builder', 'git-github'],
    duration: '6-8 hours',
  },
]
