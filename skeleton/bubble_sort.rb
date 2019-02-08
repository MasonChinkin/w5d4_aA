def bubble_sort(arr)
  sorted = false
  
  until sorted
    i = 0
    sorted = true

    while i < arr.length - 1
      if arr[i] > arr[i+1]
        sorted = false
        arr[i], arr[i+1] = arr[i+1], arr[i]
      end

    i += 1
    end
  end

  arr
end


p bubble_sort([5,4,3,2,1])