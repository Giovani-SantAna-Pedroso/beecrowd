while True:

    h1,m1, h2,m2 = map(int,input().split())
    if h1 == 0 and m1 == 0 and h2 == 0 and m2 ==0:
        break

    diff =(h2*60 +m2)- (h1*60 +m1)
    if diff < 0:
        diff = 1440 + diff
    print(diff)
