# Queue
Queue factory for Javascript

# Code Example
<code>const queue = createQueue();</code>

# Methods

## add
### parameter callback
### type: () => void
add a new callback to queue.

## cancel
### parameter callback
### type: () => void
cancel callback before it execute.

## execute
pop callback in the first index and execute it.