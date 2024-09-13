var minMeetingRooms = function(intervals) {
    if (intervals.length === 0) return 0;

    // Step 1: Sort the intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Create a min-heap to track the end times of meetings
    const heap = [];
    
    // Step 3: Iterate through each interval
    for (const interval of intervals) {
        // If the heap is not empty and the earliest end time is less than or equal to the current start time
        if (heap.length > 0 && heap[0] <= interval[0]) {
            // Remove the room that got free
            heap.shift(); // O(n) operation, but min-heap implementation is usually available in libraries
        }
        // Add the current meeting's end time to the heap
        heap.push(interval[1]);
        // Ensure the heap is always a min-heap
        heap.sort((a, b) => a - b);
    }

    // The size of the heap is the minimum number of rooms required
    return heap.length;
};

console.log(minMeetingRooms([[0,30],[5,10],[15,20]]));