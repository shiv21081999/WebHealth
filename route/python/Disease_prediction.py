#!/usr/bin/env python
# coding: utf-8

# In[40]:


import pandas as pd 
import numpy as np 
import sys as sys
from pathlib import Path
import os


# In[41]:


path = 'd:/WebHealth/route/python'


# In[42]:


train = pd.read_csv(path+'/dataset.csv')


# In[58]:


columns = np.array(train.columns)
columns = columns[:-1]


# In[59]:


for i in range(columns.shape[0]):
    if columns[i].find(']')>=0:
        columns[i] = columns[i][:-1]
    if columns[i][0] == ' ':
        columns[i] = columns[i][1:]


# In[45]:


trainX = train.drop(['Disease'],axis=1)


# In[46]:


trainY = train['Disease']


# In[61]:


if __name__ == '__main__':
    st = sys.argv[1]
    symptoms = st.split(',')
    test = np.zeros(columns.shape)
    for i in range(len(symptoms)):
        for j in range(columns.shape[0]):
            if(symptoms[i] == columns[j]):
                test[j] = 1
                break


# In[48]:




# In[51]:


from sklearn.svm import SVC


# In[52]:


SVM = SVC(kernel='poly',C=10.0)


# In[53]:


SVM.fit(trainX,trainY)


# In[64]:


print(SVM.predict(test.reshape(1,562)))

